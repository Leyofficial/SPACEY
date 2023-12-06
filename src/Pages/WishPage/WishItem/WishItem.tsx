import style from './WishItem.module.scss'
import {checkNewPrice} from "../../MainPage/percentageFuncrion.ts";
import {CustomBtnCart} from "../../../Utility/CustomBtn/CustomBtn.tsx";

interface IWishItem {
    obj: {
        img: string,
        productTitle: string,
        percentageOfDiscount: number,
        price: number,
        status : string
    }
}

function WishItem({obj}: IWishItem) {
    const {img, productTitle, percentageOfDiscount, price, status} = obj
    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                <img src={img} alt='img'/>
            </div>
            <div className={style.text}>
                {productTitle}
            </div>
            <div className={style.price}>
                <p className={style.oldPrice}>
                    {price}
                </p>
                <p>${checkNewPrice(price, percentageOfDiscount)}</p>
            </div>
            <div className={style.status}>
                {status}
            </div>
            <div className={style.btn}>
                <CustomBtnCart text={'ADD TO CART'}/>
            </div>
        </div>
    )
}

export default WishItem