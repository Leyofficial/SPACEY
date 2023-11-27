import './App.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import HomePage from "./Routers/Home/HomePage.tsx";
import NotFound from "./Routers/NotFound/NotFound.tsx";
import ShopGrid from "./Routers/ShopGrid/ShopGrid.tsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.tsx";
import WishList from "./Pages/WishList/WishList.tsx";
import PaymentPage from "./Pages/PaymentPage/PaymentPage.tsx";
import Billing from "./Pages/PaymentPage/Billing/Billing.tsx";
import CheckOutPayment from "./Pages/PaymentPage/CheckOutPayment/CheckOutPayment.tsx";
import AboutUs from "./Pages/AboutUsPage/AboutUs.tsx";
import HelpPage from "./Pages/HelpPage/HelpPage.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'shop-grid'} element={<ShopGrid/>}>
                        {/*<Route path={'/shop-grid/:category'} element={<Check/>}/>*/}
                        {/*// useParams*/}
                        {/*<Route path={'shop-grid/:category/:model'}/>*/}
                        {/*<Route path={'shop-grid/:category/:model'}/>*/}
                    </Route>
                    <Route path={'payment-grid'} element={<PaymentPage/>}>
                        <Route path={':idUser'} element={<Billing/>}></Route>
                        <Route path={'check/:idOrder'} element={<CheckOutPayment/>}></Route>
                    </Route>
                    <Route path={'help'} element={<HelpPage/>}></Route>
                    <Route path={'/wish'} element={<WishList/>}></Route>
                    <Route path={'*'} element={<NotFound/>}/>
                    <Route path={'/product/:productId'} element={<ProductDetail/>}></Route>
                    <Route path={'/about'} element={<AboutUs/>}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
