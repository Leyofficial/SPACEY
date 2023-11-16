import style from './BlockItem.module.scss'
import {ICategory} from "../../../types.ts";
import {useGetImage} from "../../../hooks/getImage/useGetImage.ts";
import {Skeleton} from "@mui/material";

interface IBlockItemProps {
    item: ICategory
}

const BlockItem = ({item}: IBlockItemProps) => {
    const {image, isLoading} = useGetImage(item.product.images.mainImage)

    return (
        <div className={style.item}>
            <section className={style.image}>
                {isLoading ? <Skeleton width={202} height={172}></Skeleton> : <img src={image ? image : ""} alt={'product'}/>}
            </section>
            <section className={style.info}>
                <p>{item.product.rating}</p>
                <p className={style.title}>{item.product.title}</p>
                <p className={style.price}>${item.product.price}</p>
            </section>
        </div>
    );
};

export default BlockItem;