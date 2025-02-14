import {Outlet} from "react-router-dom";
import Header from "../Components/Header/Header.tsx";
import Category from "../Components/Header/Category/Category.tsx";
import {Widget} from "../Utility/Widget/Widget.tsx";

function Layout () {
    return (
        <>
            <header>
                <Widget/>
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