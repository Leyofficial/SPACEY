import style from './OrderActivity.module.scss'
import {getIconOrder} from "./getIconOrder.tsx";
import {formatOrderDate} from "../Date/formatOrderDate.ts";

interface IOrderActivity {
    text: string,
    date: string,
}

export function OrderActivity({text, date}: IOrderActivity) {
    const dateActivity = new Date(date)
    return (
        text && date &&
        <div className={style.block}>
            <div className={style.icon}>
                {getIconOrder(text)}
            </div>
            <div className={style.textBlock}>
                <h2 className={style.title}>{text}</h2>
                <p className={style.data}>{formatOrderDate(dateActivity)}</p>
            </div>
        </div>
    )
}
