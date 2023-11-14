import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../../../ApiRequests/uploads/getImage.ts";
import style from './PopperItem.module.scss'
import {Skeleton} from "@mui/material";
import {ICategory} from "../../../../../types.ts";



interface IPopperItemProps {
    item: ICategory,
}

const PopperItem = ({item}: IPopperItemProps) => {
    const [image, setImage] = useState<string | null>(null)
    const [isLoadImage,setIsLoad] = useState<boolean>(false)

    useEffect(() => {
        getImageFromServer(item.product.images.mainImage, setImage,setIsLoad)
    }, [item])

    return (
        <div className={style.container}>
            <section className={style.wrapperImage}>
                {isLoadImage ? <Skeleton  variant="text" width={124} height={124}></Skeleton>  : <img src={image ? image : ""} alt={'photo'}/> }
            </section>
            <section className={style.wrapperText}>
                <p className={style.title}>{item.product.title}</p>
                <p className={style.price}>{item.product.price} USD</p>
            </section>

        </div>
    );
};

export default PopperItem;