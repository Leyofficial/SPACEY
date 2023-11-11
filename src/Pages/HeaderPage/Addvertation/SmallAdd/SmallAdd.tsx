import style from './SmallAdd.module.scss'
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../../ApiRequests/uploads/getImage.ts";
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {IItem} from "../BigAdd/types.ts";
import {Skeleton} from "@mui/material";

function SmallAdd({item}: IItem) {
    const [image, setImage] = useState<string | null>(null)
    useEffect(() => {
        if (!item) return
            getImageFromServer(item.product.images.mainImage, setImage)
    }, [item])
    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                {!image ? <Skeleton  variant="text" width={124} height={124}></Skeleton> : <img src={ image ? image : ''} alt="photo"/> }
            </div>
            <div className={style.textBlock}>
                    <p className={style.title}>{item?.brand}</p>
                    <p className={style.price}>${item?.product.price} USD</p>
                <CustomBtn/>
            </div>
        </div>
    )
}

export default SmallAdd