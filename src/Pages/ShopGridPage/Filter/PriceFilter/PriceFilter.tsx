import style from './PriceFilter.module.scss'
import {IPricesRange, pricesRangeData} from "./data.ts";
import {CustomRadio} from "../../../../Utility/CustomRadio/CustomRadio.tsx";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

function PriceFilter() {
    return (
        <div className={style.block}>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    {pricesRangeData.map((item : IPricesRange) =>
                        <CustomRadio typeNavigate={'price'} price={[item.minPrice , item.maxPrice]} text={item.text}/>
                    )}
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default PriceFilter