import style from './SingleProduct.module.scss';
import {UseCustomQuery} from "../../../../ApiRequests/customQuery/customQuery.ts";
import {useGetImage} from "../../../../hooks/getImage/useGetImage.ts";
import {Skeleton} from "@mui/material";
import {useEffect} from "react";

interface ISingleProductProps{
    product:{
        count:number,
        idProduct:string,
        _id:string
    },
    callback:(arg:number) => void
}
const SingleProduct = ({product,callback}:ISingleProductProps) => {

    const {data} = UseCustomQuery(`https://spacey-server.vercel.app/api/${product?.idProduct}`)
    const {image,isLoading} = useGetImage(data?.found.product.images.mainImage)

    useEffect(() => {
        if(data?.found.product.price && product?.count)
        callback(data.found.product.price * product.count)

    },[data,product])

    return (
        <div className={style.product}>
            {isLoading ? <Skeleton width={70} height={70}/>:<img src={image ? image : ""} alt={'product'}/> }
                <div className={style.priceWrapper}>
                    <p className={style.title}>{data?.found.product.title}</p>
                    <p className={style.price}><span>{product?.count} x </span>${data?.found.product.price * product?.count}</p>
                </div>
        </div>
    );
};

export default SingleProduct;