import style from './Allready.module.scss'
import {NavLink} from "react-router-dom";
interface IAllready {
    path : string,
    question : string,
    todo : string
}
function AllreadyQuestion({path , question , todo } : IAllready) {
    return (
        <div className={style.block}>
            <p>{question}?</p>
            <NavLink to={path}>{todo}</NavLink>
        </div>
    )
}
export default AllreadyQuestion