import style from './TrackOrderWrapper.module.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import CustomizedSteppers from "../../../../Utility/Stepper/Stepper.tsx";
import {steps} from "./TrackOrderSteps.tsx";
import {OrderActivity} from "../../../../Utility/OrderActivity/OrderActivity.tsx";
import {errorToaster} from "../../../../Utility/ToasterActions/ErrorToaster.tsx";

function TrackOrderWrapper() {
    const activity = [
        {
            text: 'Your order has been confirmed',
            data: '19 Jan, 2021 at 2:61 PM',
        }, {
            text: 'Your order is successfully verified.',
            data: '20 Jan, 2021 at 7:32 PM',
        }, {
            text: 'Your order on the way to (last mile) hub.',
            data: '21, 2021 at 5:32 AM'
        }
    ]
    const [orderInfo, setOrderInfo] = useState(null)
    const {orderId} = useParams();

    useEffect(() => {
        axios.get('https://spacey-server.vercel.apps').then((res) => {
            setOrderInfo(res.data)
        }).catch((err) => {
           errorToaster(err.message);
        })
    }, [orderId]);

    console.log(orderInfo);

    return (
        <div className={style.block}>
            <header className={style.header}>
                <div className={style.textBlock}>
                    <h2 className={style.orderId}>
                        #{orderId}
                    </h2>
                    <div className={style.subtitleBlock}>
                        <p className={style.productsAmount}>
                            {8} Products
                        </p>
                        <span className={style.point}>•</span>
                        <p className={style.dateOrder}>
                            Order Placed in 17 Jan, 2021 at 7:32 PM
                        </p>
                    </div>
                </div>
                <div className={style.priceBlock}>
                    <h2 className={style.price}>${1199}.00</h2>
                </div>
            </header>
            <main className={style.main}>
                <p className={style.expectedDate}>
                    Order expected arrival 23 Jan, 2021
                </p>
                <div className={style.stepper}>
                    <CustomizedSteppers steps={steps} activeStep={1}/>
                </div>
            </main>
            <section className={style.orderActivity}>
                <h2 className={style.orderActivity}>Order Activity</h2>
                <div className={style.activityItems}>
                    {activity.map((item , index) => {
                        return <OrderActivity key={index} text={item.text} data={item.data}/>
                    })}
                </div>
            </section>
        </div>
    )
}

export default TrackOrderWrapper