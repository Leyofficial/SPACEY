import style from './SummeryProduct.module.scss';

import {IOrderProducts} from "../payment.types.ts";
import SingleProduct from "./SingleProduct/SinglProduct.tsx";
import {useEffect, useState} from "react";
import {getProduct} from "../../../ApiRequests/Items/getProduct.ts";


const SummeryProduct = ({products}: IOrderProducts) => {

    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        setTotalPrice(0)
        products?.map((product) => {
            getProduct(product.idProduct).then(res => changeTotalHandler(res.data.found.product.price * Number(product.count)))

        })

    }, [products])
    const changeTotalHandler = (sum: number) => {
        setTotalPrice(prev => prev + sum)
    }


    return (
    <>
        <div className={style.wrapper}>


            <h3>Order Summery</h3>
            {products?.map((item, index) => <SingleProduct key={index}
                                                           product={item}></SingleProduct>)}

            <div className={style.infoPayment}>
                <p><span>Sub-total</span>${totalPrice}</p>
                <p><span>Shipping</span>Free</p>
                <p><span>Discount</span>{totalPrice && Math.round(totalPrice * 0.10)}.00</p>
                <p><span>Tax</span>${totalPrice && Math.round(totalPrice * 0.05)}.00</p>
            </div>
            <div className={style.totalWrapper}>
                <p className={style.totalTitle}>Total</p>
                <p className={style.totalPrice}>{totalPrice - (totalPrice * 0.10 - (totalPrice * 0.17))} USD</p>
            </div>
        </div>
    </>
    );
};

export default SummeryProduct;