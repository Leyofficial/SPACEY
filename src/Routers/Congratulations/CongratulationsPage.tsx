import style from './CongratulationsPage.module.scss'
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer/Footer.tsx";
function CongratulationsPage() {
    return (
        <>
            <header className={style.header}>
                <BreadCrumb/>
            </header>
            <div className={style.block}>
                <Outlet/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>

    )
}
export default CongratulationsPage