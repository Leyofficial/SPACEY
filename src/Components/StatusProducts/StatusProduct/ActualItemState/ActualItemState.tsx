import style from './ActualItemState.module.scss'
import {Skeleton} from "@mui/material";
import {useGetImage} from "../../../../hooks/getImage/useGetImage.ts";
function ActualItemState({item}) {
    const {image} = useGetImage(item?.product.images.mainImage);
    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                {image ? <img src={image ? image : ''} alt={'photo'} /> : <Skeleton variant={'rounded'} width={80} height={80}/> }
            </div>
            <div className={style.textBlock}>
                <p className={style.titleWrapper}>
                    {item?.brand}
                </p>
                <p className={style.price}>
                    ${item?.product.price}
                </p>
            </div>
        </div>
    )
}
export default ActualItemState