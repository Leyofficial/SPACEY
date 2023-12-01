import style from './Already.module.scss'
import {NavLink} from "react-router-dom";
interface IAlready {
    path : string,
    question : string,
    todo : string
}
function AlreadyQuestion({path , question , todo } : IAlready) {
    return (
        <div className={style.block}>
            <p>{question}?</p>
            <NavLink to={path}>{todo}</NavLink>
        </div>
    )
}
export default AlreadyQuestion