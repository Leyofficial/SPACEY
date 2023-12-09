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
    inProcess?:boolean,
    disable?:boolean
}
function CustomBtn({text = 'shop now' , path = '#' , arrowLeft , callback,disable} : ICustomBtn) {
    return (
        <button className={`${style.button} ${disable ? style.disableBtn : ""}`}  onClick={callback} disabled={disable}>
        <NavLink to={path} className={style.btn}>
            {arrowLeft ? <><BsArrowLeftShort color={'white'} size={30}/><p className={style.btnText}>{text}</p></> :
            <> <p className={style.btnText}>{text}</p>
                <BsArrowRightShort color={'white'} size={30}/></>}
        </NavLink>
        </button>
    )
}
export function CustomBtnCart({text = 'add to cart' , path = '#',typeBtn, blockWidth , background = '#FA8232',callback,inProcess} : ICustomBtn) {
    return (
        <>
                {typeBtn === 'BUY' ? <NavLink style={{width:blockWidth,background:background}} to={path} className={style.buyBtn}>{text}</NavLink> :  <NavLink onClick={callback} style={{width:`100%`}} to={path} className={`${style.btn}
             ${inProcess ? style.processBtn : ""}`}>
                <p className={style.btnText}>{text}</p>
            <PiBasket  color={'white'} size={30}/>
        </NavLink>}
        </>
    )
}

export default CustomBtn