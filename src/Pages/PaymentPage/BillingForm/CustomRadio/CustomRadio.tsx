import FormControl from "@mui/material/FormControl";
import {FormLabel} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {FaCreditCard} from "react-icons/fa";
import {BsCashCoin} from "react-icons/bs";
import style from './CustomRadio.module.scss'

export default function RowRadioButtonsGroup({callback}:{callback:(arg:string) => void}) {
    return (
        <FormControl className={style.container}>
            <FormLabel id="demo-row-radio-buttons-group-label"><h2 className={style.paymentTitle}>Payment option</h2>
            </FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                className={style.wrapper}
                onChange={(e) => callback(e.target.value)}
            >
                <FormControlLabel className={style.blockWrapper} value={'cash'} control={<Radio required={true}/>}
                                  label={<div>
                                      <BsCashCoin color={'#30b006'}/>
                                      <p>Cash on Delivery</p>
                                  </div>}/>
                <span className={style.line}></span>
                <FormControlLabel className={style.blockWrapper} value="card" control={<Radio required={true}/>} label={
                    <div>
                        <FaCreditCard color={'#e5620a'}/>
                        <p>Debit/Credit Card</p>
                    </div>
                }/>
            </RadioGroup>
        </FormControl>
    );
}