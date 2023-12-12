import style from './UserAccountProfile.module.scss'
import {Outlet} from "react-router-dom";
import MiniSideBar from "../../../Utility/MiniSideBar/MiniSideBar.tsx";
import Footer from "../../../Components/Footer/Footer.tsx";
import BreadCrumb from "../../../Components/BreadCrumb/BreadCrumb.tsx";
import {ICustomTabItem} from "../../../Utility/MiniSideBar/CustomTabItem/CustomTabItem.tsx";
import {GoGear, GoSignOut, GoStack} from "react-icons/go";

function UserAccountProfile() {
    
    const tabItems : ICustomTabItem[] = [
        {text : 'Dashboard' , path : '/user-account/dashboard' , icon : <GoStack size={'1.25rem'}/> },
        {text : 'Settings' , path : '/user-account/settings' , icon : <GoGear size={'1.25rem'} />},
        {text : 'Log out' , path : '/user-account/logout' , icon : <GoSignOut  size={'1.25rem'}/>},
    ]

    return (
        <>
            <section>
                <BreadCrumb/>
            </section>
            <header className={style.container}>
                <main className={style.main}>
                    <MiniSideBar tabItems={tabItems} />
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