import {Outlet} from "react-router-dom";

function Layout () {
    return (
        <>
            <header>

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