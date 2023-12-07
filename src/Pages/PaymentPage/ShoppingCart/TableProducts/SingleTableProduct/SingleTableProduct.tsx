import {IShoppingItems} from "../../shoppingCartTypes.ts";
import {useEffect, useState} from "react";
import {getProduct} from "../../../../../ApiRequests/Items/getProduct.ts";
import {useGetImage} from "../../../../../hooks/getImage/useGetImage.ts";
import {Skeleton} from "@mui/material";
import style from './SingleTableProduct.module.scss'
import {TiDeleteOutline} from "react-icons/ti";

interface ISingleProductProps {
    product: IShoppingItems,
    index: number
}

const SingleTableProduct = ({product, index}: ISingleProductProps) => {
    const [cardProduct, setCardProduct] = useState(null)

    useEffect(() => {
        getProduct(product.idProduct).then(res => setCardProduct(res.data.found))
    }, [product])

    const {image, isLoading} = useGetImage(cardProduct?.product.images.mainImage)
    return (
        <>
            <ul className={style.list}>

                    <li className={style.productInfo}><TiDeleteOutline/>{isLoading ? <Skeleton width={100} height={100}/> :
                        <img src={image ? image : ""} alt={'product'}/>}{cardProduct?.product.title}</li>
                    <li>${cardProduct?.product.price}</li>
                    <li>{product?.count}</li>
                    <li>{cardProduct?.product.price * product?.count}</li>


            </ul>
        </>


    );
};

export default SingleTableProduct;