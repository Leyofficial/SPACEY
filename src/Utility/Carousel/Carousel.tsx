import style from './Carousel.module.scss'
import {useEffect, useState} from "react";
import {Skeleton} from "@mui/material";
import {getImageFromServer} from "../../ApiRequests/uploads/getImage.ts";
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
    const [image, setImage] = useState<string | null>(null)
    useEffect(() => {
        if (item) {
            getImageFromServer(item.product.images.mainImage, setImage)
        }
    }, [item])

    return (
        <div className={style.block}>
            <div className={style.imageBlock}>
                {image ? <img className={style.image} src={image ? image : ''} alt="photo"/>  : <Skeleton variant="rounded" width={148} height={148} />}

            </div>
            <div className={style.textBlock}>
                {item ?  <p className={style.title}>{item?.brand}</p> :  <Skeleton className={style.title} variant="rounded" width={128} height={20} /> }

            </div>
        </div>
    )
};

export default ProductCarouselItem