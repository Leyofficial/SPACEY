import {Outlet} from "react-router-dom";
import Header from "../Components/Header/Header.tsx";
import Category from "../Components/Header/Category/Category.tsx";

function Layout () {
    return (
        <>
            <header>
                <Header/>
                <Category/>
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