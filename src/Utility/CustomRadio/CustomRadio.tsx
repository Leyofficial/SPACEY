import { useEffect, useState } from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {useLocationCategory} from "../../hooks/category/useLocationCategory.ts";

export interface ICustomRadio {
    text: string;
    typeNavigate: string;
}

export function CustomRadio({ text, typeNavigate }: ICustomRadio) {
    const [checked, setChecked] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

    const changeRadioHandler = () => {
        if (typeNavigate === "category") {
            useLocationCategory("category" , text , navigate)
        } else if (typeNavigate === 'price') {
            useLocationCategory("priceRound" , text , navigate)
        }
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get(typeNavigate);

        // Сравниваем categoryParam с text
        if (categoryParam === text) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [location.search, text]);

    return (
        <FormControlLabel
            onClick={changeRadioHandler}
            value={text}
            control={<Radio checked={checked} />} // Используем checked для установки состояния
            label={text}
        />
    );
}

