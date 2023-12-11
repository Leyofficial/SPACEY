import style from './UserAccountProfile.module.scss'
import {Outlet} from "react-router-dom";
import MiniSideBar from "../../../Utility/MiniSideBar/MiniSideBar.tsx";
function UserAccountProfile() {
    return (
        <>
            <header className={style.container}>
                <MiniSideBar/>
            </header>
            <section>
                <Outlet/>
            </section>
        </>
    )
}
export default UserAccountProfile