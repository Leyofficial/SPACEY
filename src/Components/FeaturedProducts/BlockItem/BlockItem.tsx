import style from './BlockItem.module.scss'

import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../ApiRequests/uploads/getImage.ts";
import {ICategory} from "../../../types.ts";

interface IBlockItemProps {
    item: ICategory
}

const BlockItem = ({item}: IBlockItemProps) => {
    const [image, setImage] = useState<string | null>(null)


    useEffect(() => {
        getImageFromServer(item.product.images.mainImage, setImage)
    }, [item])
    return (
        <div className={style.item}>
            <section className={style.image}>
                <img src={image ? image : ""} alt={'product'}/>
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