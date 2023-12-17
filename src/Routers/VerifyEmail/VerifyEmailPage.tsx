import {useAppSelector} from "../../redux/hooks/hooks.ts";
import style from './VerifyEmailPage.module.scss'
import {Outlet} from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
function VerifyEmail() {
    const {user} = useAppSelector((state) => state.user)
    return (
        user && !user.emailVerified ?
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
            </> : null

    )
}
export default VerifyEmail