import style from './UserAccount.module.scss'
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import {Outlet} from "react-router-dom";

function UserAccount() {
    return (
        <>
                <header className={style.header}>
                    <div className={style.wrapper}>
                        <div className={style.breadCrumb}>
                            <BreadCrumb/>
                        </div>
                    </div>
                </header>
                <div className={style.block}>
                    <div className={style.blockWrapper}>
                        <Outlet/>
                    </div>

                </div>
        </>
    )
}
export default UserAccount