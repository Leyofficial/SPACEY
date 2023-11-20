import style from './IntroItem.module.scss'
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn";
import {Skeleton} from "@mui/material";
import {ICategory} from "../../../types.ts";
import {useGetImage} from "../../../hooks/getImage/useGetImage.ts";

interface IIntroItemProps {
    item: ICategory,
    title: string
}

const IntroItem = ({item, title}: IIntroItemProps) => {

    const {image,isLoading} = useGetImage(item?.product.images.mainImage)
    return (
        <div className={`${style.item} ${title === 'INTRODUCING' ? style.whiteBackground : ""}`}>
            <div className={style.info}>
                <p className={`${style.title} ${title === 'INTRODUCING' ? style.blue : ""}`}>{title}</p>
                <h3 className={`${style.itemTitle} ${title === 'INTRODUCING' ? style.color : ""}`}>New {item?.product.title}</h3>
                <p className={`${style.description} ${title === 'INTRODUCING' ? style.innerColor : ""}`}>{item?.product.description}</p>
                <CustomBtn text={'SHOP NOW'} path={`/product/${item?._id}`}></CustomBtn>
            </div>
            <div className={style.coverImage}>
                {isLoading ? <Skeleton variant="text" width={240} height={240}></Skeleton> :
                    <img alt={'product'} src={image ? image : ""}/>}
                {title === 'INTRODUCING NEW' ? <div className={style.price}>
                    {item?.product.price} $
                </div> : null}
            </div>
        </div>
    );
};

export default IntroItem;