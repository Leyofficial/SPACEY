import {Route} from "react-router-dom";
import HeaderPage from "../Pages/HeaderPage/HeaderPage.tsx";
import MainPage from "../Pages/MainPage/MainPage.tsx";

function HomePage() {
    return (
        <>
            <HeaderPage/>
            <MainPage/>
        </>
    )
}
export default HomePage