import style from './SmallAdd.module.scss'
import {IItem} from "../BigAdd/BigAdd.tsx";
import {BsArrowRightShort} from "react-icons/bs";
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../../ApiRequests/uploads/getImage.ts";

function SmallAdd({item}: IItem) {
    const [image, setImage] = useState<string | null>(null)
    useEffect(() => {
        if (!item) return
            getImageFromServer(item.product.images.mainImage, setImage)
    }, [item])
    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                 <img src={ image ? image : ''} alt="photo"/>

            </div>
            <div className={style.textBlock}>
                    <p className={style.title}>{item?.brand}</p>
                    <p className={style.price}>${item?.product.price} USD</p>
                <button className={style.btn}>
                    <p className={style.btnText}>Shop Now</p>
                    <div>
                        <BsArrowRightShort color={'white'} size={30}/>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SmallAdd