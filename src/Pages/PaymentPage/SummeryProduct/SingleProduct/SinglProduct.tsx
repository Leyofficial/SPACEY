import style from './SingleProduct.module.scss';
import {UseCustomQuery} from "../../../../ApiRequests/customQuery/customQuery.ts";
import {useGetImage} from "../../../../hooks/getImage/useGetImage.ts";
import {Skeleton} from "@mui/material";
import {ISingleProductProps} from "./singleProduct.ts";
import {NavLink} from "react-router-dom";


const SingleProduct = ({product}:ISingleProductProps) => {

    const {data} = UseCustomQuery(`https://spacey-server.vercel.app/api/${product?.idProduct}`)
    const {image,isLoading} = useGetImage(data?.found.product.images.mainImage)



    return (
        <div className={style.product}>
            <NavLink to={`/product/${product.idProduct}`}>
            {isLoading ? <Skeleton width={70} height={70}/>:<img src={image ? image : ""} alt={'product'}/> }
                <div className={style.priceWrapper}>
                    <p className={style.title}>{data?.found.product.title}</p>
                    <p className={style.price}><span>{product?.count} x </span>${data?.found.product.price * product?.count}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default SingleProduct;