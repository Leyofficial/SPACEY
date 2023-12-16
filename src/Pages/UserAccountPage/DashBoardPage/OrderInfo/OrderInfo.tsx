import style from './OrderInfo.module.scss'
import {IOrderInfo} from "../dashboardTypes.ts";


export function OrderInfo({background , numberOfOrders , icon , text} : IOrderInfo) {
    return (
        <div style={{background : background}} className={style.block}>
            <div className={style.iconBlock}>
                {icon}
            </div>
            <div className={style.textBlock}>
                <p className={style.numOrders}>{numberOfOrders}</p>
                <p className={style.describing}>{text}</p>
            </div>
        </div>
    )
}