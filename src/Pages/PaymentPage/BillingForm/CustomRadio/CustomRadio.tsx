import FormControl from "@mui/material/FormControl";
import {FormLabel} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {FaCreditCard} from "react-icons/fa";
import {SlPaypal} from "react-icons/sl";
import {IoLogoAmazon} from "react-icons/io5";
import {BsCashCoin} from "react-icons/bs";
import style from './CustomRadio.module.scss'
export default function RowRadioButtonsGroup() {
    return (
        <FormControl className={style.container}>
            <FormLabel id="demo-row-radio-buttons-group-label"><h2 className={style.paymentTitle}>Payment option</h2></FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            className={style.wrapper}
            >
                <FormControlLabel className={style.blockWrapper} value={'cash'} control={<Radio/>} label={<div>
                    <BsCashCoin color={'#30b006'}/>
                    <p>Cash on Delivery</p>
                </div>}/>
                <span className={style.line}></span>
                <FormControlLabel className={style.blockWrapper} value="paypal" control={<Radio/>} label={
                    <div>
                        <SlPaypal color={'#052ca4'}/>
                        <p>PayPal</p>
                    </div>
                }/>
                <span className={style.line}></span>
                <FormControlLabel className={style.blockWrapper} value="amazo" control={<Radio/>} label={
                    <div>
                        <IoLogoAmazon color={'#e58807'}/>
                        <p>Amazon Pay</p>
                    </div>
                }/>
                <span className={style.line}></span>
                <FormControlLabel className={style.blockWrapper} value="card" control={<Radio/>} label={
                    <div>
                        <FaCreditCard color={'#e5620a'}/>
                        <p>Debit/Credit Card</p>
                    </div>
                }/>
            </RadioGroup>
        </FormControl>
    );
}