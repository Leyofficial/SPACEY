import style from './DiscountItemSI.module.scss'
import {IGetDiscountItemProps} from "../type.ts";
import {UseCustomQuery} from "../../../ApiRequests/customQuery/customQuery.ts";
function DiscountItemSI({idItem}: IGetDiscountItemProps) {
    const {data} = UseCustomQuery(`https://spacey-server.vercel.app/api/${idItem}`)

    return (
        <div className={style.block}>
            <div className={style.textBlock}>
                <h1 className={style.title}>
                    {data.item.brand}
                </h1>
            </div>
        </div>
    )
}
export default DiscountItemSI