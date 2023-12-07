
import {IShoppingItems} from "../../shoppingCartTypes.ts";
import {useEffect, useState} from "react";
import {getProduct} from "../../../../../ApiRequests/Items/getProduct.ts";
import {useGetImage} from "../../../../../hooks/getImage/useGetImage.ts";
import {Skeleton} from "@mui/material";
import style from './SingleTableProduct.module.scss'
import {TiDeleteOutline} from "react-icons/ti";

interface ISingleProductProps{
    product:IShoppingItems,
    index:number
}
const SingleTableProduct = ({product,index}:ISingleProductProps) => {
    const [cardProduct,setCardProduct] = useState(null)

    useEffect(() => {
        getProduct(product.idProduct).then(res => setCardProduct(res.data.found))
    },[product])

    const {image,isLoading} = useGetImage(cardProduct?.product.images.mainImage)
    return (
 <>
     <tr key={index} className={style.tableProduct}>
         <td className={style.title}><TiDeleteOutline />{isLoading ? <Skeleton/> : <img src={image ? image : ""} alt={'product'}/>}{cardProduct?.product.title}</td>
         <td>{cardProduct?.product.price}</td>
         <td>{product.count}</td>
         <td>{cardProduct?.product.price}</td>
     </tr>
 </>


    );
};

export default SingleTableProduct;