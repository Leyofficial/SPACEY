import style from './Input.module.scss'
import React from "react";
import {FiSearch} from "react-icons/fi";
interface IInput {
    placeholder : string,
    btnOnRight? : boolean,
    typeBtn? : string,
    type : string
    value : string,
    callbackInput : (value: any) => void;
    callbackBtn? : () => void;
}



function Input ({placeholder , typeBtn , type , value , callbackInput , callbackBtn} : IInput) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        callbackInput(event.target.value);
    }
    const showBtn = () => {

            if ( typeBtn === 'search') {
                return <button onClick={() => callbackBtn ? callbackBtn() :null} className={style.btn}>
                    <FiSearch size={15}/>
                </button>
            }
            // if (typeBtn === 'send') {
            //     return <CustomBtn/>
            // }

    }
    return (
        <div className={style.block}>
            <input
                value={value}
                onChange={handleChange}
                className={style.input}
                placeholder={placeholder}
                type={type}
            />
            {typeBtn ? showBtn() : null}
        </div>
)
}

export default Input