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
import UserAccount from "./Routers/UserAccount/UserAccount.tsx";
import Login from "./Pages/UserAccountPage/LoginPage/Login.tsx";
import SignUp from "./Pages/UserAccountPage/SignUpPage/SignUp.tsx";
import ForgetPassword from "./Pages/UserAccountPage/ForgetPasswordPage/ForgetPassword.tsx";
import PrivateRoute from "./Utility/PrivateRoute/PrivateRoute.tsx";
import ResetPassword from "./Pages/UserAccountPage/ResetPasswordPage/ResetPassword.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'shop-grid'} element={<ShopGrid/>}/>
                    <Route path={'payment-grid'} element={<PaymentPage/>}>
                        <Route path={':idUser'} element={<Billing/>}></Route>
                        <Route path={'check/:idOrder'} element={<CheckOutPayment/>}></Route>
                    </Route>
                    <Route path={'user-account'} element={<UserAccount/>}>
                        <Route element={<PrivateRoute to={'login'} isAuth={true}/>}>
                            <Route path={'login/reset-password'} element={<ResetPassword/>}/>
                        </Route>
                        <Route path={'login'} element={<Login/>}/>
                        <Route path={'sign-up'} element={<SignUp/>}/>
                        <Route path={'login/forget-password'} element={<ForgetPassword/>}/>
                    </Route>
                    <Route path={'payment-grid'} element={<PaymentPage/>}></Route>
                    <Route path={'/wish'} element={<WishList/>}></Route>
                    <Route path={'*'} element={<NotFound/>}/>
                    <Route path={'/product/:productId'} element={<ProductDetail/>}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
