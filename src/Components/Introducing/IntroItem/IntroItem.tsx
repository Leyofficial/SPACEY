import style from './IntroItem.module.scss'
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn";
import {ICategory} from "../../../types.ts";
import {useGetImage} from "../../../hooks/getImage/useGetImage.ts";
import CustomSkeleton from "../../../Utility/CustomSkeleton/CustomSkeleton.tsx";

interface IIntroItemProps {
    item: ICategory,
    title: string,
    typeItem:string
}

const IntroItem = ({item, title,typeItem}: IIntroItemProps) => {

    const {image} = useGetImage(item?.product.images.mainImage)

    return (
        <div className={`${style.item} ${typeItem === 'yellow' ? style.whiteBackground : ""}`}>
            <div className={style.info}>
                <p className={`${style.title} ${typeItem === 'yellow' ? style.blue : ""}`}>{title}</p>
                <h3 className={`${style.itemTitle} ${typeItem === 'yellow' ? style.color : ""}`}>New {item?.product.title}</h3>
                <p className={`${style.description} ${typeItem === 'yellow' ? style.innerColor : ""}`}>{item?.product.description}</p>
                <CustomBtn text={'SHOP NOW'} path={`/product/${item?._id}`}></CustomBtn>
            </div>
            <div className={style.coverImage}>
                <CustomSkeleton image={image} height={240} width={240}><img src={image ? image : ""} alt={'product'}/></CustomSkeleton>
                {typeItem === 'blue' ? <div className={style.price}>
                    {item?.product.price} $
                </div> : null}
            </div>
        </div>
    );
};

export default IntroItem;