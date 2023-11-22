import style from './CustomSearch.module.scss'
import React, {useState} from "react";
import {IoIosSearch} from "react-icons/io";

interface ICustomSearch {
    placeholder: string,
    callback: (arg: any) => void
}

export function CustomSearch({ placeholder , callback}: ICustomSearch) {
    const [value , setValue ] = useState<string>();
    function handleClick () {
        callback(value)
    }
    return (
        <div className={style.block}>
            <div className={style.wrapper}>
                <input className={style.input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} type="text"
                       value={value} placeholder={placeholder}/>
                <IoIosSearch  onClick={handleClick} style={{cursor : 'pointer'}} size={30}/>
            </div>
        </div>
    )
}
