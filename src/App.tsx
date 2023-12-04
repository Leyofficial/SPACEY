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
import { useState} from "react";
import ActiveTokenReset from "./Pages/UserAccountPage/ActiveToken/ActiveTokenReset.tsx";
import FaqPage from "./Pages/FAQ-Page/FaqPage.tsx";
import TrackOrder from "./Pages/TrackOrderPage/TrackOrder.tsx";
import TrackOrderStatus from "./Pages/TrackOrderPage/TrackOrderStatus/TrackOrderStatus.tsx";
import TrackOrderWrapper from "./Pages/TrackOrderPage/TrackOrderStatus/TrackOrderWrapper/TrackOrderWrapper.tsx";

import AboutUs from "./Pages/AboutUsPage/AboutUs.tsx";
import HelpPage from "./Pages/HelpPage/HelpPage.tsx";
import PayCard from "./Pages/PaymentPage/PayCard/PayCard.tsx";

function App() {
    // const clientId = '982859489612-1o67pno0bhgh0dtvblloucbqbpjptlf5.apps.googleusercontent.com'
    const [getPermission , setPermissionReset] = useState(false);
    const [permissionFromLogin , setPermissionLogin] = useState(false);
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'shop-grid'} element={<ShopGrid/>}/>
                    <Route path={'payment-grid'} element={<PaymentPage/>}>
                        <Route path={':idUser'} element={<Billing/>}></Route>
                        <Route path={'check/:idOrder'} element={<CheckOutPayment/>}></Route>
                        <Route path={':idOrder/pay-card'} element={<PayCard/>}></Route>
                    </Route>
                    <Route path={'/FAQ'} element={<FaqPage/>}/>
                    <Route path={'track-order'} element={<TrackOrder/>}/>
                    <Route path={'/track-order/status'} element={<TrackOrderStatus/>}>
                        <Route index element={<TrackOrderWrapper/>}/>
                    </Route>
                    <Route path={'user-account'} element={<UserAccount/>}>
                        <Route path={'reset-password/active/:token'} element={<ActiveTokenReset callback={setPermissionReset}/>}></Route>
                        <Route element={<PrivateRoute to={'login'} isAuth={getPermission}/>}>
                            <Route path={'login/reset-password'} element={<ResetPassword callback={setPermissionReset}/>}/>
                        </Route>
                        <Route path={'login'} element={<Login/>}/>
                        <Route element={<PrivateRoute to={'login'} isAuth={permissionFromLogin}/>}>
                            {/*блок который нужно будет вводить числа с емайла */}
                        </Route>
                        <Route path={'sign-up'} element={<SignUp callback={setPermissionLogin}/>}/>
                        <Route path={'login/forget-password'} element={<ForgetPassword />}/>
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
