import style from './SmallAdd.module.scss'
import {IItem} from "../BigAdd/BigAdd.tsx";
import {BsArrowRightShort} from "react-icons/bs";
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../../ApiRequests/uploads/getImage.ts";

function SmallAdd({item}: IItem) {
    const [image, setImage] = useState<string | null>(null)
    useEffect(() => {
        getImageFromServer(item.product.images.mainImage, setImage)
    }, [])
    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                <img src={image} alt="photo"/>
            </div>
            <div className={style.textBlock}>
                    <p className={style.title}>{item.brand}</p>
                    <p className={style.price}>${item.product.price} USD</p>
                <button className={style.btn}>
                    <p className={style.btnText}>Shop Now</p>
                    <BsArrowRightShort color={'white'} size={30}/>
                </button>
            </div>
        </div>
    )
}

export default SmallAdd