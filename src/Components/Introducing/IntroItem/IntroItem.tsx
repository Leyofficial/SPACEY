import style from './IntroItem.module.scss'
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn";
import {ICategory} from "../../Header/Category/ProperWindow/PopperItem/PopperItem";
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../ApiRequests/uploads/getImage";
import {Skeleton} from "@mui/material";

interface IIntroItemProps {
    item: ICategory,
    title: string
}

const IntroItem = ({item, title}: IIntroItemProps) => {
    const [image, setImage] = useState<string | null>(null)
const [loadImage,setLoadImage] = useState<boolean>(false)
    useEffect(() => {
        getImageFromServer(item?.product.images.mainImage, setImage,setLoadImage)

    }, [item])
    return (
        <div className={`${style.item} ${title === 'INTRODUCING' ? style.whiteBackground : ""}`}>
            <div className={style.info}>
                <p className={`${style.title} ${title === 'INTRODUCING' ? style.blue : ""}`}>{title}</p>
                <h3 className={`${style.itemTitle} ${title === 'INTRODUCING' ? style.color : ""}`}>New {item?.product.title}</h3>
                <p className={`${style.description} ${title === 'INTRODUCING' ? style.innerColor : ""}`}>{item?.product.description}</p>
                <CustomBtn text={'SHOP NOW'}></CustomBtn>
            </div>
            <div className={style.coverImage}>
                {loadImage ? <Skeleton  variant="text" width={240} height={240}></Skeleton> :  <img alt={'product'} src={image ? image : ""}/>}
                {title !== 'INTRODUCING' ? <div className={style.price}>
                    {item?.product.price} $
                </div> : null}
            </div>
        </div>
    );
};

export default IntroItem;