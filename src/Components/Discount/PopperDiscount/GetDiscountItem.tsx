import { UseCustomQuery } from "../../../ApiRequests/customQuery/customQuery.ts";
import style from "./GetDiscount.module.scss";
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn.tsx";
import { IGetDiscountItemProps } from "../type.ts";
import { useGetImage } from "../../../hooks/getImage/useGetImage.ts";
import CustomSkeleton from "../../../Utility/CustomSkeleton/CustomSkeleton.tsx";

const GetDiscountItem = ({ idItem }: IGetDiscountItemProps) => {
  const { data } = UseCustomQuery(
    `https://spacey-server-two.vercel.app/api/${idItem}`
  );
  const { image } = useGetImage(data?.found?.product.images.mainImage);

  return (
    <section className={style.container}>
      <div className={style.imageItem}>
        <CustomSkeleton image={image} width={200} height={161}>
          <img src={image ? image : ""} alt={"photo"} />
        </CustomSkeleton>
      </div>
      <p className={style.discount}>
        {data?.found?.product.percentageOfSale}% Discount
      </p>

      <div className={style.info}>
        Escape the noise,It`s time to hear the magic with{" "}
        <span>{data?.found?.product.title}</span>
      </div>
      <p className={style.price}>
        Starting price with <span>${data?.found?.product.price} USD</span>
      </p>
      <div className={style.btn}>
        <CustomBtn text={"SHOP NOW"}></CustomBtn>
      </div>
    </section>
  );
};

export default GetDiscountItem;
