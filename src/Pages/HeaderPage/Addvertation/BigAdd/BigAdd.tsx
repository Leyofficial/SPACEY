import style from './BigAdd.module.scss'
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {Skeleton} from "@mui/material";
import {useGetImage} from "../../../../hooks/getImage/useGetImage.ts";
import {IItem} from "../../../../types.ts";


function BigAdd({item,idItem}: IItem) {
    const {image} = useGetImage(item?.product.images.mainImage)

    return (
        <>
            <div className={style.block}>
                <div className={style.textBlock}>
                    <h2 className={style.title}>{item?.brand}</h2>
                    <CustomBtn path={`/product/${idItem}`}/>
                </div>
                <div className={style.photoBlock}>
                    {!image ?   <Skeleton  variant="text" width={360} height={'100%'}></Skeleton> : <><img src={image ? image : ""} alt="photo"/><div className={style.price}>{item?.product.price}</div> </> }
                </div>
            </div>
            </>

    )
}

export default BigAdd