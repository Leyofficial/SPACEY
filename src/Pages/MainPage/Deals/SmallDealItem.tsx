import style from './SmallDealItem.module.scss'
import {ISmallDeal} from "../types.ts";
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../ApiRequests/uploads/getImage.ts";
import {Skeleton} from "@mui/material";
import {CustomSaleType} from "../../../Utility/CustomSaleType/CustomSaleType.tsx";

function SmallDealItem({item}: ISmallDeal) {
    const [image, setImage] = useState<string | null>(null)
    function checkNewPrice(price : number , percentage : number){
        if (price) {
            const discount = price * (percentage / 100);
            const newPrice = price - discount;
            return Math.round(newPrice);

        }
    }
    useEffect(() => {
        if (item) {
            getImageFromServer(item.product.images.mainImage, setImage)
        }
    }, [item])
    return (
        <div className={style.block}>
            <CustomSaleType typeSale={item.product.saleType} />
            {image ? <img className={style.image} src={image ? image : ''} alt=""/> : <Skeleton className={style.imgSkeleton} variant={"rounded"} width={216} height={188}/>  }

            <p className={style.title}>{item?.brand}</p>
            {item?.product.sale ?
                <div className={style.priceBlock}>
                    <p className={style.oldPrice}>${checkNewPrice(item?.product.price , 20)}</p>
                    <p className={style.newPrice}>${item?.product.price}</p>
                </div>
            : null}

        </div>
    )
}

export default SmallDealItem