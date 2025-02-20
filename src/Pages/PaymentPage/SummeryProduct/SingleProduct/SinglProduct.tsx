import style from "./SingleProduct.module.scss";
import { UseCustomQuery } from "../../../../ApiRequests/customQuery/customQuery.ts";
import { useGetImage } from "../../../../hooks/getImage/useGetImage.ts";
import { Skeleton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { IProducts } from "../../payment.types.ts";

const SingleProduct = ({ product }: { product: IProducts }) => {
  const { data } = UseCustomQuery(
    `https://spacey-server-two.vercel.app/api/${product?.idProduct}`
  );
  const { image, isLoading } = useGetImage(
    data?.found.product.images.mainImage
  );

  return (
    <div className={style.product}>
      <NavLink to={`/product/${product.idProduct}`}>
        {isLoading ? (
          <Skeleton width={70} height={70} />
        ) : (
          <img src={image ? image : ""} alt={"product"} />
        )}
        <div className={style.priceWrapper}>
          <p className={style.title}>{data?.found.product.title}</p>
          <p className={style.price}>
            <span>{product?.count} x </span>$
            {data?.found.product.price * Number(product?.count)}
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default SingleProduct;
