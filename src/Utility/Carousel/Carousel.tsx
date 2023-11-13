import style from './Carousel.module.scss'
import {useEffect} from "react";
import {Skeleton} from "@mui/material";
interface ICarousel {
    item : {
        brand : string,
        product : {
            images: {
                mainImage: string,
                restImages: {
                    images: [string],
                    color: string
                }
            },
        }
    }
}
const ProductCarouselItem = ({item} : ICarousel) => {
    useEffect(() => {
        console.log(item)
    },[item])

    return (
        <div className={style.block}>
            <div className={style.imageBlock}>
                {item?.product.images.mainImage ? <img src={   item?.product.images.mainImage} alt="photo"/>  : <Skeleton variant="rounded" width={148} height={148} />}

            </div>
            <div className={style.textBlock}>
                <p className={style.title}>{item?.brand}</p>
            </div>
        </div>
    )
};

export default ProductCarouselItem