import style from './CustomBtn.module.scss'
import {BsArrowRightShort} from "react-icons/bs";
import {NavLink} from "react-router-dom";

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
export default CustomBtn