import {CircularProgress} from "@mui/material";
import style from './SpinnerLoading.module.scss'
export function SpinnerLoading() {
    return (
        <div className={style.parent}>
            <div className={style.block}>
                <CircularProgress/>
            </div>
        </div>
    )
}