import style from './WishPage.module.scss'
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import {Outlet} from "react-router-dom";

function WishPage() {
    return (
        <>
            <div className={style.bread}>
                <BreadCrumb/>
            </div>
            <div className={style.block}>
               <Outlet/>
            </div>
        </>
    )
}

export default WishPage