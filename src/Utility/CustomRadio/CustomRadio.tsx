import { useEffect, useState } from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {useLocationCategory} from "../../hooks/category/useLocationCategory.ts";
import {useGetParams} from "../../hooks/params/getAllParams.ts";

export interface ICustomRadio {
    text: string;
    typeNavigate: string;
    price? : number[]
}

export function CustomRadio({ text, typeNavigate , price}: ICustomRadio) {
    const [checked, setChecked] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

    const changeRadioHandler = () => {
        if (typeNavigate === "category") {
            useLocationCategory("category" , text , navigate);
        } else if (typeNavigate === 'price') {
            useLocationCategory("minPrice" , price[0] , navigate)
            useLocationCategory("maxPrice" , price[1] , navigate)
        }
    };

    useEffect(() => {
        const { categoryParam, maxPriceParam , minPriceParam } = useGetParams();;
        if (typeNavigate === 'price') {
            if ( minPriceParam == price[0] && maxPriceParam == price[1]) {
                setChecked(true)
            } else {
                setChecked(false)
            }
        } else if (categoryParam === text) {
            setChecked(true);
        } else {
            setChecked(false);
        }

        // Сравниваем categoryParam с text

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

