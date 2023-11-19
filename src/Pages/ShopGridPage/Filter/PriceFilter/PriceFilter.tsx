import style from './PriceFilter.module.scss'
import {CustomRadio} from "../../../../Utility/CustomRadio/CustomRadio.tsx";
import {pricesRangeData} from "./data.ts";
function PriceFilter() {
    return (
        <div className={style.block}>
            {pricesRangeData.map((item) =>
                <CustomRadio typeNavigate={'search'} text={item.trim()} />
            )}
        </div>
    )
}
export default PriceFilter