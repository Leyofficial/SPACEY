import style from './OrderActivity.module.scss'
import {getIconOrder} from "./getIconOrder.tsx";
interface IOrderActivity {
    text : string,
    data : string,
}
export function OrderActivity({text , data} : IOrderActivity) {
    return (
        <div className={style.block}>
            <div className={style.icon}>
                {getIconOrder(text)}
            </div>
            <div className={style.textBlock}>
                <h2 className={style.title}>{text}</h2>
                <p className={style.data}>{data}</p>
            </div>
        </div>
    )
}
