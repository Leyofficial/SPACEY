import style from './BigAdd.module.scss'
import {BsArrowRightShort} from "react-icons/bs";
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../../ApiRequests/uploads/getImage.ts";

export interface IItem {
    item: {
        brand: string,
        product: {
            saleDescription: string,
            images: {
                mainImage:string,
                restImages:{
                    images:[string],
                    color:string
                }
            },
            percentageOfSale: number,
            price: number
        }
    }
}

function BigAdd({item}: IItem) {
    const [image,setImage] = useState<string | null>(null)

    useEffect(() => {
        if (item) {
            getImageFromServer(item.product.images.mainImage,setImage)
        }
    },[item])
    return (
        <>
            <div className={style.block}>
                <div className={style.textBlock}>
                    <h2 className={style.title}>{item?.brand}</h2>
                    <p className={style.subtitle}>{item?.product?.saleDescription}</p>
                    <button className={style.btn}>
                        <p className={style.btnText}>Shop Now</p>
                        <BsArrowRightShort color={'white'} size={30}/>
                    </button>
                </div>
                <div className={style.photoBlock}>
                    <img src={image ? image : ""} alt="photo"/>
                    <div className={style.price}>${item?.product.price}</div>
                </div>
            </div>
            </>

    )
}

export default BigAdd