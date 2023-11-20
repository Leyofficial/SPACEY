import style from './ActualItemState.module.scss'
import {Skeleton} from "@mui/material";
import {useGetImage} from "../../../../hooks/getImage/useGetImage.ts";
import {IItem} from "../../../../types.ts";
import {NavLink} from "react-router-dom";
function ActualItemState({item} : IItem) {

    const {image} = useGetImage(item?.product.images.mainImage);
    return (
        <div className={style.block}>
            <NavLink className={style.link} to={`/product/${item._id}`}>
            <div className={style.imgBlock}>
                {image ? <img className={style.img} src={image ? image : ''} alt={'photo'} /> : <Skeleton variant={'rounded'} width={80} height={80}/> }
            </div>
            <div className={style.textBlock}>
                <p className={style.titleWrapper}>
                    {item?.brand}
                </p>
                <p className={style.price}>
                    ${item?.product.price}
                </p>
            </div>
            </NavLink>
        </div>
    )
}
export default ActualItemState