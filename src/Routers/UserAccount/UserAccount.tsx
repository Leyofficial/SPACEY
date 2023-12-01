import style from './UserAccount.module.scss'
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer/Footer.tsx";

export interface ICallbackAccount {
    callback : ( a : boolean) => void
}
function UserAccount() {
    return (
        <>
                <header className={style.header}>
                    <div className={style.breadCrumb}>
                        <BreadCrumb/>
                    </div>
                </header>
                <div className={style.block}>
                    <div className={style.blockWrapper}>
                        <Outlet/>
                    </div>
                </div>
                <div className={style.footer}>
                    <Footer/>
                </div>
        </>
    )
}
export default UserAccount