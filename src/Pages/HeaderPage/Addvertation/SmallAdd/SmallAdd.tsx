import style from './SmallAdd.module.scss'
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {Skeleton} from "@mui/material";
import {useGetImage} from "../../../../hooks/getImage/useGetImage.ts";
import {IItem} from "../../../../types.ts";

function SmallAdd({item,idItem}: IItem) {
    const {image} = useGetImage(item?.product.images.mainImage)

    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                {!image ? <Skeleton  variant="text" width={124} height={124}></Skeleton> : <img src={ image ? image : ''} alt="photo"/> }
            </div>
            <div className={style.textBlock}>
                    <p className={style.title}>{item?.brand}</p>
                    <p className={style.price}>${item?.product.price} USD</p>
                <CustomBtn path={`/product/${idItem}`}/>
            </div>
        </div>
    )
}

export default SmallAdd