import style from './DiscountItemSI.module.scss'
import {IGetDiscountItemProps} from "../type.ts";
import {UseCustomQuery} from "../../../ApiRequests/customQuery/customQuery.ts";
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../ApiRequests/uploads/getImage.ts";
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn.tsx";
import {Skeleton} from "@mui/material";
interface IDiscountItem {
    brand : string,
    product : {
        description : string,
        price : string
    }
}
function DiscountItemSI({idItem}: IGetDiscountItemProps) {
    const [discountItem , setItem] = useState<IDiscountItem | null>(null);
    const {data} = UseCustomQuery(`https://spacey-server.vercel.app/api/${idItem}`)
    const [image, setImage] = useState<string | null>(null)
    const [isLoadImage,setIsLoadImage] = useState<boolean>(false)

    useEffect(() => {
        getImageFromServer(data?.found?.product.images.mainImage, setImage,setIsLoadImage)
    }, [data])
    useEffect(() => {
        setItem(data?.found)
    }, [data]);
    return (
        <>
        {discountItem && <div className={style.block}>
            <div className={style.imgBlock}>
                {!isLoadImage ?  <img src={image ? image : ''} alt="photo"/> : <Skeleton width={'200px'} height={'120px'} variant={'rounded'}/>}

            </div>
            <div className={style.textBlock}>
                <h1 className={style.title}>
                    {discountItem?.brand}
                </h1>
                <p className={style.description}>
                    {discountItem?.product.description}
                </p>
                <div className={style.priceBlock}>
                    <p className={style.priceTitle}>Only for :</p>
                    <p className={style.price}>${discountItem?.product.price} USD</p>
                </div>
            </div>
            <div className={style.btn}>
            <CustomBtn/>
            </div>
        </div>}
        </>
    )
}
export default DiscountItemSI