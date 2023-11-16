
import HeaderPage from "../../Pages/HeaderPage/HeaderPage.tsx";
import MainPage from "../../Pages/MainPage/MainPage.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import News from "../../Components/News/News.tsx";


function HomePage() {
    return (
        <>
            <HeaderPage/>
            <MainPage/>
            <News></News>
            <Footer></Footer>
        </>
    )
}
export default HomePage