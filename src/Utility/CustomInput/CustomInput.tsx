import {useAppDispatch} from "../../redux/hooks/hooks.ts";
import {ChangeEventHandler} from "react";
import {createAction} from "@reduxjs/toolkit";
import style from './CustomInput.module.scss'

const changeValue = createAction<string>('change/value')

interface CustomInputProps {
    label?: string,
    value: string | number,
    callback: typeof changeValue,
    placeholder:string,
    inputType?:string
}

const CustomInput = ({label, value, callback,placeholder,inputType="text"}: CustomInputProps) => {
    const dispatch = useAppDispatch()
    const callbackHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(callback(e.target.value))
    }
    return (
        <>
            <div className={style.wrapperInput} style={{display:"flex",flexDirection:"column",gap:'5px'}}>
                <label>{label}</label>
                <input type={inputType} placeholder={placeholder} value={value} onChange={callbackHandler}/>
            </div>

        </>
    );
};

export default CustomInput;