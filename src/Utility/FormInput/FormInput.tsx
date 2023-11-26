// FormInput.tsx
import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5';
import style from './FormInput.module.scss';
import {useState} from "react";


interface IFormInput {
    errors : any
    // name - very important for using form
    name : string
    label: string;
    type?: string;
    register : any,

    // custom
    placeHolder?: string;
    eye?: boolean;
}

export function FormInput(props: IFormInput) {
    const {label, register , name , errors ,  placeHolder,  eye, type = 'text'} = props;
    const [eyeOpen , setEyeOpen ] =  useState(false);
    return (
        <div className={style.block}>
            <label className={style.label} htmlFor="input">
                {label}
            </label>
            <div className={style.inputBlock}>
                <input
                    {...register(name , {required : `${label} is required` ,  minLength : {
                            value : 5,
                            message : 'The input field must be more than 5 characters'
                        }})}
                    className={`${style.input} ${errors[name] ? style.invalidInput : ''  } `}
                    placeholder={placeHolder}
                    id={'input'}
                    type={eyeOpen ? 'text' : type}
                />
                {eye ?
                    <div className={style.eye} onClick={() => setEyeOpen(!eyeOpen)}>
                        {eyeOpen ?  <IoEyeOutline/> : <IoEyeOffOutline />}
                    </div> : null}
            </div>

            {errors[name] ?  <div className={style.errorText}>{ errors[name].message}</div> : null}

        </div>
    );
}
