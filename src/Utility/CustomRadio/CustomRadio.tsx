import {useLocation, useNavigate} from "react-router-dom";
// import style from './Radio.module.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface ICustomRadio {
    text: string;
    typeNavigate? : string,
}

export function CustomRadio({ text , typeNavigate}: ICustomRadio) {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const changeRadioHandler = () => {
        if (typeNavigate === 'category') {
            const urlRequest = 'category=' + text;
                navigate( location.search && !location.search.includes('category=') ? location.search + '&' + urlRequest : '?' + urlRequest)
        }

    }
    return (
        <div>
            <FormControlLabel onClick={changeRadioHandler} value={text} control={<Radio />} label={text} />
        </div>
    );
}
