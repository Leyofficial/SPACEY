import style from "./MainPage.module.scss";
import { UseCustomQuery } from "../../ApiRequests/customQuery/customQuery.ts";
import DealItem from "./Deals/SmallDeal/SmallDealItem.tsx";
import { useEffect, useState } from "react";
import { IBigDeal } from "./types.ts";
import BigDealItem from "./Deals/BigDeal/BigDealItem.tsx";
import BigDealSkeleton from "./Deals/BigDeal/BigDealSkeleton.tsx";
import Slider from "react-slick";
import { shuffleArray } from "../../Utility/shufflerArray/shufllerArray.ts";
import ProductCarouselItem from "../../Utility/Carousel/Carousel.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../Components/Banner/Banner.tsx";
import Acessories from "./ComputerAcessories/Acessories.tsx";
import StatusProducts from "../../Components/StatusProducts/StatusProducts.tsx";
import { SkeletonSmallCall } from "../HeaderPage/Addvertation/SmallAdd/SmallAddSkeleton.tsx";
import React from "react";

function MainPage() {
  const { isLoading, data } = UseCustomQuery(
    "https://spacey-server-two.vercel.app/api"
  );
  const [filteredCategories, setFiltered] = useState([]);
  const numSkeleton = useState(8)[0];
  const [wholeDate, setWhole] = useState([]);

  useEffect(() => {
    if (!data) return;
    const filteredSale = data?.categories?.filter(
      (item: IBigDeal) => item.product.sale
    );
    setWhole(data?.categories);
    if (filteredSale) {
      setFiltered(shuffleArray(filteredSale).slice(0, 8));
    }
  }, [data]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={style.container}>
      <div className={style.textBlock}>
        <h1 className={style.title}>Best Deals</h1>
      </div>
      <div className={style.block}>
        <div className={style.leftBlock}>
          {!isLoading && filteredCategories ? (
            <BigDealItem item={filteredCategories[0]} />
          ) : (
            <BigDealSkeleton />
          )}
        </div>
        <div className={style.itemsBlock}>
          {!isLoading && filteredCategories.length > 0 ? (
            <>
              {filteredCategories.map((item, index) => (
                <DealItem key={index} item={item} />
              ))}
            </>
          ) : (
            <>{SkeletonSmallCall(numSkeleton)}</>
          )}
        </div>
      </div>
      <div className={style.carousel}>
        <p className={style.title}>Shop with Categories</p>
        <div className={style.carouselItems}>
          <Slider {...settings}>
            {filteredCategories.map((item, index) => {
              return (
                <div>
                  <ProductCarouselItem key={index} item={item} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className={style.banner}>
        <Banner item={filteredCategories[0]} />
        <Banner item={filteredCategories[1]} />
      </div>
      <div className={style.acessroies}>
        <Acessories />
      </div>
      <div className={style.smallStatus}>
        <StatusProducts items={wholeDate} />
      </div>
    </div>
  );
}

export default MainPage;
