import style from './TrackOrderWrapper.module.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import CustomizedSteppers from "../../../../Utility/Stepper/Stepper.tsx";
import {steps} from "./TrackOrderSteps.tsx";
import {errorToaster} from "../../../../Utility/ToasterActions/ErrorToaster.tsx";
import {IOrderInfo} from "../../types.ts";
import {OrderActivity} from "../../../../Utility/OrderActivity/OrderActivity.tsx";
import {formatOrderDate} from "../../../../Utility/Date/formatOrderDate.ts";

function TrackOrderWrapper() {
    const [orderInfo, setOrderInfo] = useState<IOrderInfo | null>(null)
    const {orderId} = useParams();
    const [dateOrder , setDate] = useState<Date>()
    const [totalPrice , setTotalPrice] = useState<number>(0);

    useEffect(() => {
        axios.get(`https://spacey-server.vercel.app/processOrder/${orderId}`).then((res) => {
            setOrderInfo(res.data.order);
        }).catch((err) => {
           errorToaster(err.message);
        })
    }, [orderId]);

    useEffect(() => {
        // total Price + date
        if (!orderInfo) return
        let price = 0;
        const date = new Date(orderInfo.date);
        setDate(date);
        orderInfo.products.map((item) => {
            price += item.price
        })
        setTotalPrice(price)
    }, [orderInfo]);

    return (
        orderInfo ? <div className={style.block}>
            <header className={style.header}>
                <div className={style.textBlock}>
                    <h2 className={style.orderId}>
                        #{orderId}
                    </h2>
                    <div className={style.subtitleBlock}>
                        <p className={style.productsAmount}>
                            {orderInfo.products.length} Products
                        </p>
                        <span className={style.point}>•</span>
                        <p className={style.dateOrder}>
                            Order Placed in  {formatOrderDate(dateOrder)}
                        </p>
                    </div>
                </div>
                <div className={style.priceBlock}>
                    <h2 className={style.price}>${totalPrice}.00</h2>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.stepper}>
                    <CustomizedSteppers steps={steps} activeStep={orderInfo.orderActivity.length / 2}/>
                </div>
            </main>
            <section className={style.orderActivity}>
                <h2 className={style.orderActivity}>Order Activity</h2>
                <div className={style.activityItems}>
                    {orderInfo.orderActivity.map((item , index) => {
                        return <OrderActivity key={index} text={item.text} date={item.date}/>
                    })}
                </div>
            </section>
        </div> : null
    )
}

export default TrackOrderWrapper