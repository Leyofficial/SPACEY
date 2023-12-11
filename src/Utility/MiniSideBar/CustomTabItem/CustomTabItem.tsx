import {NavLink} from "react-router-dom";
import React from "react";
import style from './CustomTabItem.module.scss'
interface ICustomTabItem {
    text : string,
    path : string,
    icon : React.ReactNode
}
export function CustomTabItem({text , path , icon} : ICustomTabItem) {
    return (
        <div className={style.linkItem}><NavLink
            className={({isActive}) =>
                isActive ? "activeLinkSidebar" : ""
            }
            to={path}
        >
            <div>
                {icon}
            </div>
            <div>
                {text}
            </div>
        </NavLink>
        </div>
    )
}