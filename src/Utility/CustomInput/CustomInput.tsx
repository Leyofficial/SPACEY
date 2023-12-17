import style from './CustomInput.module.scss'
import React from "react";
interface ICustomInput {
    label : string,
    callback? : (arb : any) => void,
    value : string,
    type : string,
    name : string
    changeHandler:(arg:React.ChangeEvent<HTMLInputElement>) => void,
    focusHandler: (arg:React.FocusEvent<HTMLInputElement>) => void,
    maxLength : number
}
export function CustomInput({label , value , focusHandler , changeHandler , maxLength  , type , name} : ICustomInput) {
    return (
        <div className={style.inputBlock}>
            <div className={style.label}>{label}</div>
            <input
                className={style.input}
                type={type}
                name={name}
                value={value}
                onChange={changeHandler}
                onFocus={focusHandler}
                maxLength={maxLength}
            />
        </div>
    )
}