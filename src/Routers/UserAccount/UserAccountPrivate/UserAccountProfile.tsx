import style from './UserAccountProfile.module.scss'
import {Outlet} from "react-router-dom";
import MiniSideBar from "../../../Utility/MiniSideBar/MiniSideBar.tsx";
import Footer from "../../../Components/Footer/Footer.tsx";
import BreadCrumb from "../../../Components/BreadCrumb/BreadCrumb.tsx";

function UserAccountProfile() {
    return (
        <>
            <section>
                <BreadCrumb/>
            </section>
            <header className={style.container}>
                <main className={style.main}>
                    <MiniSideBar/>
                    <section>
                        <Outlet/>
                    </section>
                </main>
            </header>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default UserAccountProfile