import style from "./Addvertation.module.scss";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import BigAdd from "./BigAdd/BigAdd.tsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SmallAdd from "./SmallAdd/SmallAdd.tsx";
import BigAddSkeleton from "./BigAdd/BigAddSkeleton.tsx";
import SmallAddSkeleton from "./SmallAdd/SmallAddSkeleton.tsx";
import { AddverationSkeleton } from "./AddverationSkeleton.tsx";

function Addvertation() {
  const [items, setItems] = useState([]);
  const { isLoading, data } = useQuery("repoData", () =>
    fetch("https://spacey-server-two.vercel.app/api").then((res) => res.json())
  );

  useEffect(() => {
    if (!data) return;
    setItems(data.categories);
  }, [data]);

  return items?.length > 0 ? (
    <div className={style.block}>
      <div className={style.blockWrapper}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className={style.mySwiper}
        >
          <SwiperSlide>
            {" "}
            {!isLoading && items ? (
              <BigAdd
                item={items[0]}
                idItem={data ? data.categories[0]._id : null}
              />
            ) : (
              <BigAddSkeleton />
            )}{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            {!isLoading && items ? (
              <BigAdd
                item={items[4]}
                idItem={data ? data.categories[4]._id : null}
              />
            ) : (
              <BigAddSkeleton />
            )}{" "}
          </SwiperSlide>
        </Swiper>
        <div className={style.rightBlock}>
          {!isLoading && data ? (
            <SmallAdd item={items[3]} idItem={data.categories[3]._id} />
          ) : (
            <SmallAddSkeleton />
          )}
          {!isLoading && data ? (
            <SmallAdd item={items[2]} idItem={data.categories[2]._id} />
          ) : (
            <SmallAddSkeleton />
          )}
        </div>
      </div>
    </div>
  ) : (
    <AddverationSkeleton />
  );
}

export default Addvertation;
