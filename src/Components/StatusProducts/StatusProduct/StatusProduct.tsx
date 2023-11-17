import style from './StatusProduct.module.scss'
import {IProductOutside} from "../../../types.ts";
import {useGetImage} from "../../../hooks/getImage/useGetImage.ts";
import {Skeleton} from "@mui/material";
function StatusProduct({item , title} : IProductOutside ) {
    const {image,isLoading} = useGetImage(item?.product.images.mainImage);
    return (
        <>
            <h1 className={style.title}>{title}</h1>
            <div className={style.block}>
                <div className={style.imgBlock}>
                    {!isLoading ? <img src={image ? image : ''} alt={'photo'} /> : <Skeleton variant={'rounded'} width={80} height={80}/> }
                </div>
                <div className={style.textBlock}>
                    <p className={style.titleWrapper}>
                        {item?.brand}
                    </p>
                    <p className={style.price}>
                        ${item?.product.price};
                    </p>
                </div>
            </div>
        </>

    )
}
export default StatusProduct