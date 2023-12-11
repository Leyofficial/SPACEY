import style from './UserAccountProfile.module.scss'
import {Outlet} from "react-router-dom";
function UserAccountProfile() {
    return (
        <>
            <header className={style.container}>
                <p>Hello</p>
            </header>
            <section>
                <Outlet/>
            </section>
        </>
    )
}
export default UserAccountProfile