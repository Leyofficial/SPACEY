import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Radio.module.scss';

interface ICustomRadio {
    text: string;
}

export function CustomRadio({ text }: ICustomRadio) {
    const [checked, setChecked] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!checked) return
        navigate(text)
    }, [checked]);

    const handleInputChange = () => {
        setChecked(!checked);
    };

    return (
        <div className={style["radio-buttons-container"]}>
            <div className={style["radio-button"]}>
                <input
                    checked={checked}
                    name="radio-group"
                    id="radio2"
                    className={style["radio-button__input"]}
                    type="radio"
                />
                <label onClick={handleInputChange} htmlFor="radio2" className={style["radio-button__label"]}>
                    <span className={style["radio-button__custom"]}></span>
                    <p className={style.text}>{text}</p>
                </label>
            </div>
        </div>
    );
}
