import style from './WishItem.module.scss'
import {checkNewPrice} from "../../MainPage/percentageFuncrion.ts";
import {CustomBtnCart} from "../../../Utility/CustomBtn/CustomBtn.tsx";
import {MdOutlineCancel} from "react-icons/md";
import {checkStock} from "../../../Utility/CheckStock/checkStock.tsx";
import {useEffect, useState} from "react";
import {getProduct} from "../../../ApiRequests/Items/getProduct.ts";
import {getImageFromServer} from "../../../ApiRequests/uploads/getImage.ts";
import {Skeleton} from "@mui/material";

interface IWishItemServer {
    brand : string,
    product : {
        images : {
            mainImage : string
        }
        productTitle: string,
        percentageOfSale : number | string
        percentageOfDiscount: number,
        price: string | number,
        status: string
    }

}

interface IWishItem {
    id : string
}
function WishItem({id} : IWishItem) {
    const [image , setImage] = useState<any | null>(null)
    const [foundProduct , setProduct] = useState<IWishItemServer | null>(null);
    // const {img, productTitle, percentageOfDiscount, price, status} = obj
    useEffect(() => {
        if (!id) return ;
        getProduct(id).then((res) => {
            setProduct(res.data.found)

        })
    },[])

    useEffect(() => {
        if (!foundProduct) return
        getImageFromServer(foundProduct?.product?.images.mainImage , setImage);
    }, [foundProduct]);

    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                {image ? <img src={image} alt='img'/> : <Skeleton variant={'rounded'} width={80} height={60}/> }
            </div>
            <div className={style.text}>
                {foundProduct?.brand}
            </div>
            <div className={style.price}>
                <p className={style.oldPrice}>
                    {foundProduct?.product.price}
                </p>
                <p>${checkNewPrice(foundProduct?.product.price, foundProduct?.product.percentageOfSale)}</p>
            </div>
            <div className={style.status}>
                {/*{checkStock(foundProduct?.product?.stock)}*/}
                {checkStock('OUT OF STOCK')}
            </div>
            <div className={style.action}>
                <div className={style.btn}>
                    <CustomBtnCart text={'ADD TO CART'}/>
                </div>
                <div className={style.cancel}>
                    <MdOutlineCancel size={25} color={'#929FA5'}/>
                </div>
            </div>
        </div>
    )
}

export default WishItem