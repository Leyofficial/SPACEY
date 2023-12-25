import React from "react";

interface IInputCardProps {
    type: string,
    name: string,
    placeholder: string,
    value: string | number,
    changeHandler:(arg:React.ChangeEvent<HTMLInputElement>) => void,
    focusHandler: (arg:React.FocusEvent<HTMLInputElement>) => void,
    maxLength: number
}

const InputCard = ({type, name, placeholder, value, changeHandler, focusHandler, maxLength}:IInputCardProps) => {
    return (
        <>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
                onFocus={focusHandler}
                maxLength={maxLength}
            />
        </>
    );
};

export default InputCard;