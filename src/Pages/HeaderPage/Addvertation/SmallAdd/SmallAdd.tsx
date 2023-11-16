import style from './SmallAdd.module.scss'
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {IItem} from "../BigAdd/types.ts";
import {Skeleton} from "@mui/material";
import {useGetImage} from "../../../../hooks/getImage/useGetImage.ts";

function SmallAdd({item}: IItem) {
    const {image, isLoading} = useGetImage(item?.product.images.mainImage)

    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                {isLoading ? <Skeleton  variant="text" width={124} height={124}></Skeleton> : <img src={ image ? image : ''} alt="photo"/> }
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