import style from './SummeryProduct.module.scss';
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn.tsx";
import {IOrderProducts} from "../payment.types.ts";
import SingleProduct from "./SingleProduct/SinglProduct.tsx";
import {useState} from "react";

const SummeryProduct = ({products}: IOrderProducts) => {

const [totalPrice,setTotalPrice] = useState<number>(0)

    const changeTotalHandler = (sum : number) => {
    if(totalPrice === 0 ) {
        console.log(sum)
        setTotalPrice(sum)
    }else{
        setTotalPrice(prev => {
            console.log(prev)
            return prev + sum
        })
    }
    }

    return (
        <div className={style.summer}>
            <h3>Order Summery</h3>
            {products?.map((item,index) =>  <SingleProduct callback={changeTotalHandler} key={index} product={item}></SingleProduct>)}

            <div className={style.infoPayment}>
                <p><span>Sub-total</span>${totalPrice}</p>
                <p><span>Shipping</span>Free</p>
                <p><span>Discount</span>{totalPrice && Math.round(totalPrice * 0.10)}.00</p>
                <p><span>Tax</span>${totalPrice && Math.round(totalPrice * 0.17)}.00</p>
            </div>
            <div className={style.totalWrapper}>
                <p className={style.totalTitle}>Total</p>
                <p className={style.totalPrice}>{totalPrice - (totalPrice * 0.10 - (totalPrice * 0.17)) } USD</p>
            </div>
            <div className={style.btn}>
                <CustomBtn text={'PLACE ORDER'}></CustomBtn>
            </div>

        </div>
    );
};

export default SummeryProduct;