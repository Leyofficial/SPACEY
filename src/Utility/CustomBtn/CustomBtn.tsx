import style from './CustomBtn.module.scss'
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {PiBasket} from "react-icons/pi";

interface ICustomBtn {
    text? : string,
    callback?: any;
    path? : string,
    arrowLeft? : boolean,
    typeBtn?:string,
    blockWidth?:string,
    background? : string
}
function CustomBtn({text = 'shop now' , path = '#' , arrowLeft , callback} : ICustomBtn) {
    return (
        <button className={style.button}  onClick={callback}>
        <NavLink to={path} className={style.btn}>
            {arrowLeft ? <><BsArrowLeftShort color={'white'} size={30}/><p className={style.btnText}>{text}</p></> :
            <> <p className={style.btnText}>{text}</p>
                <BsArrowRightShort color={'white'} size={30}/></>}
        </NavLink>
        </button>
    )
}
export function CustomBtnCart({text = 'add to cart' , path = '#',typeBtn, blockWidth , background = '#FA8232'} : ICustomBtn) {
    return (
        <>
            {typeBtn === 'BUY' ? <NavLink style={{width:blockWidth}} to={path} className={style.buyBtn}>{text}</NavLink> :  <NavLink style={{width:`100%` , background,}} to={path} className={style.customBtn}>
            <p className={style.btnText}>{text}</p>
            <PiBasket  color={'white'} size={30}/>
        </NavLink>}
        </>
    )
}

export default CustomBtn