import React from "react";
import style from './CustomIconButton.module.scss'
import {NavLink} from "react-router-dom";

interface ICustomIconButton {
    icon: React.ReactNode,
    callback?: () => void,
    path?: string,
    shaped? : boolean,
}

export function CustomIconButton({icon , path = '#' , shaped , callback}: ICustomIconButton) {
    return (
        <div onClick={callback} className={`${style.block} ${shaped ? style.shaped : null}`}>
            <NavLink to={path}>
                {icon}
            </NavLink>
        </div>

    )
}
