import React from "react";
import style from "../../Pages/UserAccountPage/LoginPage/Login.module.scss";

interface IBtnLogo {
    text : string,
    logo : React.ReactNode,
    callback : () => void;
}
export function BtnLogoText({text , logo , callback} : IBtnLogo) {
    return (
        <div onClick={() => callback()} className={style.googleAuth}>
            {logo}
            <span className={style.googleText}>{text}</span>
        </div>
    )
}

