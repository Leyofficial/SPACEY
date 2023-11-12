import React from "react";
import style from './CustomIconButton.module.scss'
import {NavLink} from "react-router-dom";

interface ICustomIconButton {
    icon: React.ReactNode,
    callback?: () => void,
    path?: string
}

export function CustomIconButton({icon , path = '#'}: ICustomIconButton) {
    return (
        <div className={style.block}>
            <NavLink to={path}>
                {icon}
            </NavLink>
        </div>

    )
}
