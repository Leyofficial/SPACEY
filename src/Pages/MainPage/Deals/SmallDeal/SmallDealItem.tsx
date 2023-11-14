import style from './SmallDealItem.module.scss'
import {ISmallDeal} from "../../types.ts";
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../../ApiRequests/uploads/getImage.ts";
import {Skeleton} from "@mui/material";
import {CustomSaleType} from "../../../../Utility/CustomSaleType/CustomSaleType.tsx";
import {checkNewPrice} from "../../percentageFuncrion.ts";
import {CustomIconButton} from "../../../../Utility/CustomIconButton/CustomIconButton.tsx";
import {MdFavoriteBorder} from "react-icons/md";
import {PiBasket} from "react-icons/pi";
import {AiOutlineEye} from "react-icons/ai";

function SmallDealItem({item}: ISmallDeal) {
    const [image, setImage] = useState<string | null>(null)
    useEffect(() => {
        if (item) {
            getImageFromServer(item.product.images.mainImage, setImage)
        }
    }, [item])
    return (
        <div className={style.block}>
            <div className={style.cover}></div>
            <CustomSaleType typeSale={item?.product.saleType}/>
            {image ? <img className={style.image} src={image ? image : ''} alt=""/> :
                <Skeleton className={style.imgSkeleton} variant={"rounded"} width={216} height={188}/>}

            <p className={style.title}>{item?.brand}</p>
            {item?.product.sale ?
                <div className={style.priceBlock}>
                    <p className={style.oldPrice}>${checkNewPrice(item?.product.price, 20)}</p>
                    <p className={style.newPrice}>${item?.product.price}</p>
                </div>
                : null}
            <div className={style.iconsBlock}>
                <div className={style.wrapperBlock}>
                    <CustomIconButton shaped={true} icon={<MdFavoriteBorder size={30} color={'black'}/>}/>
                    <CustomIconButton shaped={true} icon={<PiBasket color={'black'} size={30}/>}/>
                    <CustomIconButton shaped={true} icon={<AiOutlineEye size={30} color={'black'}/>}/>
                </div>
            </div>

        </div>
    )
}

export default SmallDealItem