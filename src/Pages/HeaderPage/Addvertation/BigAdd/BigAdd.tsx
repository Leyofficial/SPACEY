import style from './BigAdd.module.scss'
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../../ApiRequests/uploads/getImage.ts";
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {IItem} from "./types.ts";
import {Skeleton} from "@mui/material";


function BigAdd({item}: IItem) {
    const [image,setImage] = useState<string | null>(null)

    useEffect(() => {
        if (item) {
            getImageFromServer(item.product.images.mainImage,setImage)
        }
    },[item])
    return (
        <>
            <div className={style.block}>
                <div className={style.textBlock}>
                    <h2 className={style.title}>{item?.brand}</h2>
                    <CustomBtn/>
                </div>
                <div className={style.photoBlock}>
                    {!image ?   <Skeleton  variant="text" width={260} height={400}></Skeleton> : <><img src={image ? image : ""} alt="photo"/><div className={style.price}>{item?.product.price}</div> </> }
                </div>
            </div>
            </>

    )
}

export default BigAdd