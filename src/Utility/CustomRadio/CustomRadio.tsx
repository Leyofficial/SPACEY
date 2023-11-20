import {useLocation, useNavigate} from "react-router-dom";
// import style from './Radio.module.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface ICustomRadio {
    text: string;
    typeNavigate? : string,
}

export function CustomRadio({ text}: ICustomRadio) {
    const navigate = useNavigate();
    const location = useLocation();
    const changeRadioHandler = () => {
        navigate(location.search ? text + location.search : text)
    }
    return (
        <div>
            <FormControlLabel onClick={changeRadioHandler} value={text} control={<Radio />} label={text} />
        </div>
    );
}
