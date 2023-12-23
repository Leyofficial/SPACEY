import style from './CustomInput.module.scss'
import React from "react";
import {useAppDispatch} from "../../redux/hooks/hooks.ts";
import {ChangeEventHandler} from "react";
import {createAction} from "@reduxjs/toolkit";
const changeValue = createAction<string>('change/value')
interface ICustomInput {
    label? : string,
    callback? : (arb : any) => void | typeof  changeValue | any,
    value : string | number,
    placeholder?:string,
    inputType?:string
    type : string,
    name : string
    changeHandler:(arg:React.ChangeEvent<HTMLInputElement>) => void,
    focusHandler: (arg:React.FocusEvent<HTMLInputElement>) => void,
    maxLength : number
}
export function CustomInput({label , value ,callback , placeholder , focusHandler , changeHandler , maxLength  , type , name} : ICustomInput) {
    const dispatch = useAppDispatch()
    const callbackHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (callback) {
            dispatch(callback(e.target.value))
        }
    }
    return (
        <div className={style.inputBlock}>
            <div className={style.label}>{label}</div>
            <input
                className={style.input}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={changeHandler || callbackHandler}
                onFocus={focusHandler}
                maxLength={maxLength}
            />
        </div>
    )
}
export default CustomInput;