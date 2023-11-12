import style from './CustomBtn.module.scss'
import {BsArrowRightShort} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {PiBasket} from "react-icons/pi";

interface ICustomBtn {
    text? : string,
    callback? : () => void;
    path? : string
}
function CustomBtn({text = 'shop now' , path = '#'} : ICustomBtn) {
    return (
        <NavLink to={path} className={style.btn}>
            <p className={style.btnText}>{text}</p>
            <BsArrowRightShort color={'white'} size={30}/>
        </NavLink>
    )
}
export function CustomBtnCart({text = 'add to cart' , path = '#'} : ICustomBtn) {
    return (
        <NavLink to={path} className={style.btn}>
            <p className={style.btnText}>{text}</p>
            <PiBasket  color={'white'} size={30}/>
        </NavLink>
    )
}
export default CustomBtn