
import { useLocation } from "react-router-dom";
import { FormControlLabel, Radio } from "@mui/material";

export interface ICustomRadio {
    text: string;
    typeNavigate: string;
}

export function CustomRadio({ text, typeNavigate }: ICustomRadio) {
    const location = useLocation();
    const history = useHistory();

    const changeRadioHandler = () => {
        if (typeNavigate === "category") {
            const queryParams = new URLSearchParams(location.search);
            queryParams.set("category", text);

            const newSearch = queryParams.toString();
            const newUrl = `${location.pathname}?${newSearch}`;

            history.push(newUrl);
        }
    };

    return (
        <div>
            <FormControlLabel
                onClick={changeRadioHandler}
                value={text}
                control={<Radio />}
                label={text}
            />
        </div>
    );
}
