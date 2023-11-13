import style from './CustomBtn.module.scss'
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {PiBasket} from "react-icons/pi";

interface ICustomBtn {
    text? : string,
    callback?: any;
    path? : string,
    arrowLeft? : boolean,
}
function CustomBtn({text = 'shop now' , path = '#' , arrowLeft} : ICustomBtn) {
    return (
        <NavLink to={path} className={style.btn}>
            {arrowLeft ? <><BsArrowLeftShort color={'white'} size={30}/><p className={style.btnText}>{text}</p></> :
            <> <p className={style.btnText}>{text}</p>
                <BsArrowRightShort color={'white'} size={30}/></>}
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