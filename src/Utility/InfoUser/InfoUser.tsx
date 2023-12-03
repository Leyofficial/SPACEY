import React from "react";
import style from './InfoUser.module.scss'
interface IInfoUser {
    icon : React.ReactNode,
    text : string
}
export function InfoUser({icon , text} : IInfoUser) {
    return (
        <div className={style.block}>
            <div className={style.icon}>
                {icon}
            </div>
            <p className={style.text}>{text}</p>
        </div>
    )
}