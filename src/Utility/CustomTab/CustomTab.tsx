import style from './CustomTab.module.scss'
import {NavLink} from "react-router-dom";
import '../../App.scss'
interface ICustomTab {
    array: string[]
}

function CustomTab({array}: ICustomTab) {
    return (
        <div className={style.block}>
            {array.map((item: string , index : number) => {
                return <div className={style.linkItem}> <NavLink
                    key={index}
                    className={ ({ isActive }) =>
                         isActive ? "activeLink" : ""
                    }
                    // className={(isActive: any) => (isActive ? 'activeLink' : '')}
                    to={`/user-account/${item.toLowerCase()}`}
                >
                    {item}
                </NavLink>
                </div>

            })}
        </div>
    )
}

export default CustomTab