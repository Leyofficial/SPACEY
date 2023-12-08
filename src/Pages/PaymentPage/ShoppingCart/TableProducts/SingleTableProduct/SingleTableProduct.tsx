import {IShoppingItems} from "../../shoppingCartTypes.ts";
import {useEffect, useState} from "react";
import {getProduct} from "../../../../../ApiRequests/Items/getProduct.ts";
import {useGetImage} from "../../../../../hooks/getImage/useGetImage.ts";
import {Skeleton} from "@mui/material";
import style from './SingleTableProduct.module.scss'
import {TiDeleteOutline} from "react-icons/ti";
import {deleteCartItem} from "../../../../../ApiRequests/Items/Items.ts";
import {useAppSelector} from "../../../../../redux/hooks/hooks.ts";
import {IProduct} from "../../../../../types.ts";

interface ISingleProductProps {
    product: IShoppingItems,
    index: number,
    updateCart: () => void
}

interface ICartProduct {
    product: IProduct
}

const SingleTableProduct = ({product, updateCart}: ISingleProductProps) => {
    const [cardProduct, setCardProduct] = useState<ICartProduct | null>(null)
    const {user} = useAppSelector(state => state.user)

    useEffect(() => {
        getProduct(product.idProduct).then(res => setCardProduct(res.data.found))
    }, [product])

    const {image, isLoading} = useGetImage(cardProduct?.product?.images.mainImage || "")

    const deleteItemHandler = () => {
        deleteCartItem(user?._id, product?.idProduct).then(res => {
            if (res.status === 200) {
                updateCart()
            }
        })
    }
    return (
        <>
            <ul className={style.list}>
                <div className={style.productInfo}>
                    <TiDeleteOutline onClick={deleteItemHandler}/>
                    {isLoading || !cardProduct ? <Skeleton width={100} height={100}/> :
                        <img src={image ? image : ""} alt={'product'}/>}
                    <li className={style.productInfo}>{cardProduct?.product.title}</li>
                </div>

                <li>${cardProduct?.product.price}</li>
                <li>{product?.count}</li>
                <li>{Number(cardProduct?.product.price) * Number(product?.count)}</li>
            </ul>
        </>
    );
};

export default SingleTableProduct;