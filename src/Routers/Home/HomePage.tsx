
import HeaderPage from "../../Pages/HeaderPage/HeaderPage.tsx";
import MainPage from "../../Pages/MainPage/MainPage.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import News from "../../Components/News/News.tsx";
import Subscribe from "../../Components/Footer/Subscribe/Subscribe.tsx";


function HomePage() {
    return (
        <>
            <HeaderPage/>
            <MainPage/>
            <News></News>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </>
    )
}
export default HomePage