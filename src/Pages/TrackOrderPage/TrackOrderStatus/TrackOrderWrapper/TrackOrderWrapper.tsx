import style from './TrackOrderWrapper.module.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import CustomizedSteppers from "../../../../Utility/Stepper/Stepper.tsx";
import {steps} from "./TrackOrderSteps.tsx";

function TrackOrderWrapper() {
    const [orderInfo, setOrderInfo] = useState(null)
    const {orderId} = useParams();

    useEffect(() => {
        axios.get('https://spacey-server.vercel.app').then((res) => {
            setOrderInfo(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [orderId]);

    console.log(orderInfo);

    return (
        <div className={style.block}>
            <header className={style.header}>
                <div className={style.textBlock}>
                    <h2 className={style.orderId}>
                        {'#96459761'}
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
        </div>
    )
}

export default TrackOrderWrapper