import {Outlet} from "react-router-dom";
import Header from "../Components/Header/Header.tsx";

function Layout () {
    return (
        <>
            <header>
                <Header/>
            </header>
            <aside>

            </aside>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout