import {useAppSelector} from "../../redux/hooks/hooks.ts";
import style from './VerifyEmailPage.module.scss'
import {Outlet} from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import {useEffect} from "react";
import axios from "axios";
import {successToaster} from "../../Utility/ToasterActions/SuccessToaster.tsx";
function VerifyEmail() {
    const {user} = useAppSelector((state) => state.user)
    useEffect(() => {
        if (!user) return;
        axios.post('https://spacey-server.vercel.app/auth/confirmEmall' , {
            email : user.email
        }).then((res) => {
            successToaster(res.data.message);
        }).catch((err) => {
            console.log(err)
        });
    }, []);

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