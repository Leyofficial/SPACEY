import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../../../ApiRequests/uploads/getImage.ts";
import style from './PopperItem.module.scss'

interface IProduct {
    description: string,
    images: {
        mainImage: string,
        restImages: {
            color: string,
            images: [string]
        }
    },
    memory: [string],
    percentageOfSale: number,
    price: number,
    rating: number,
    sale: boolean,
    saleType: string,
    size: [string],
    storage: [string],
    title: string,
}

export interface ICategory {
    brand: string,
    categoryOfProduct: string,
    _id: string,
    product: IProduct
}

interface IPopperItemProps {
    item: ICategory
}

const PopperItem = ({item}: IPopperItemProps) => {
    const [image, setImage] = useState<string | null>(null)

    useEffect(() => {
        getImageFromServer(item.product.images.mainImage, setImage)
    }, [item])
    console.log(image)
    return (
        <div className={style.container}>
            <section className={style.wrapperImage}>
                <img src={image ? image : ""} alt={'photo'}/>
            </section>
            <section className={style.wrapperText}>
                <p className={style.title}>{item.product.title}</p>
                <p className={style.price}>{item.product.price} USD</p>
            </section>

        </div>
    );
};

export default PopperItem;