import style from './CardTotals.module.scss';
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {useEffect, useState} from "react";
import {IShoppingItems} from "../shoppingCartTypes.ts";
import {useAppSelector} from "../../../../redux/hooks/hooks.ts";


interface  ICardTotalItems{

       totalData:IShoppingItems[] | null

}
const CardTotals = ({totalData}:ICardTotalItems ) => {
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const {user} = useAppSelector(state => state.user)
    useEffect(() => {

        if (totalData) {
            const total = totalData.reduce((sum, item) => {
                return sum + Number(item.count) * Number(item.price)
            }, 0)
            setTotalPrice(Number(total))
        }

    }, [totalData])


    return (
        <section className={style.cardTotal}>
            <div className={style.wrapperInfo}>
                <h1>Card Totals</h1>
                <div className={style.info}>
                    <p><span>Sub total</span>${totalPrice}.00</p>
                    <p><span>Shipping</span>Free</p>
                    <p><span>Discount</span>${totalPrice / 10}.00</p>
                    <p><span>Tax</span>${totalPrice / 50}.00</p>
                </div>
                <div className={style.total}>
                    <p><span>Total</span>${(totalPrice + (totalPrice / 10) + (totalPrice / 50))}</p>
                </div>

                <div className={style.btn}>
                    <CustomBtn path={`/payment-grid/${user?._id}`} text={'proceed to checkout'}></CustomBtn>
                </div>
            </div>


        </section>
    );
};

export default CardTotals;