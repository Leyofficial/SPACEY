import { useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import style from './Radio.module.scss';

interface ICustomRadio {
    text: string;
    typeNavigate? : string,
}

export function CustomRadio({ text , typeNavigate = 'category' }: ICustomRadio) {
    const location = useLocation();
    const [checked, setChecked] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!checked) return
        if (typeNavigate === 'category') {
            if (location.search) {
                navigate(`${location.search}&category=${text.replace(/\s/g, '')}`)
            } else {
                navigate(`?category=${text.replace(/\s/g, '')}`)
            }
        } else if (typeNavigate === 'price') {
            if (location.search) {
                navigate(`${location.search}&price=${text.replace(/\s/g, '')}`)
            } else {
                navigate( `?price=${text.replace(/\s/g, '')}`)
            }
        }

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
