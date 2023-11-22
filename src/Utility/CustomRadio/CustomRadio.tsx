import { useEffect, useState } from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

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
            const queryParams = new URLSearchParams(location.search);
            queryParams.set("category", text);
            const newSearch = "?" + queryParams.toString();
            const newUrl = location.pathname + newSearch;

            // Программное перенаправление на новый URL
            navigate(newUrl);
        }
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get("category");

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

