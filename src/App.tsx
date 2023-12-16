import './App.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import HomePage from "./Routers/Home/HomePage.tsx";
import NotFound from "./Routers/NotFound/NotFound.tsx";
import ShopGrid from "./Routers/ShopGrid/ShopGrid.tsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.tsx";
import PaymentPage from "./Pages/PaymentPage/PaymentPage.tsx";
import Billing from "./Pages/PaymentPage/Billing/Billing.tsx";
import CheckOutPayment from "./Pages/PaymentPage/CheckOutPayment/CheckOutPayment.tsx";
import UserAccount from "./Routers/UserAccount/UserAccount.tsx";
import Login from "./Pages/UserAccountPage/LoginPage/Login.tsx";
import SignUp from "./Pages/UserAccountPage/SignUpPage/SignUp.tsx";
import ForgetPassword from "./Pages/UserAccountPage/ForgetPasswordPage/ForgetPassword.tsx";
import PrivateRoute from "./Utility/PrivateRoute/PrivateRoute.tsx";
import ResetPassword from "./Pages/UserAccountPage/ResetPasswordPage/ResetPassword.tsx";
import {useEffect, useState} from "react";
import ActiveTokenReset from "./Pages/UserAccountPage/ActiveToken/ActiveTokenReset.tsx";
import FaqPage from "./Pages/FAQ-Page/FaqPage.tsx";
import TrackOrder from "./Pages/TrackOrderPage/TrackOrder.tsx";
import TrackOrderStatus from "./Pages/TrackOrderPage/TrackOrderStatus/TrackOrderStatus.tsx";
import TrackOrderWrapper from "./Pages/TrackOrderPage/TrackOrderStatus/TrackOrderWrapper/TrackOrderWrapper.tsx";
import AboutUs from "./Pages/AboutUsPage/AboutUs.tsx";
import HelpPage from "./Pages/HelpPage/HelpPage.tsx";
import {useAppDispatch, useAppSelector} from "./redux/hooks/hooks.ts";
import axios from "axios";
import PayCard from "./Pages/PaymentPage/PayCard/PayCard.tsx";
import ComparePage from "./Routers/Compare/ComparePage.tsx";
import Compare from "./Pages/ComparePage/Compare.tsx";
import  {setUser} from "./redux/user/reducers/UserSlice.ts";
import WishPage from "./Routers/Wish/WishPage.tsx";
import Wish from "./Pages/WishPage/Wish.tsx";
import ShoppingCart from "./Pages/PaymentPage/ShoppingCart/ShoppingCart.tsx";
import DashBoardPage from "./Pages/UserAccountPage/DashBoardPage/DashBoardPage.tsx";
import UserAccountProfile from "./Routers/UserAccount/UserAccountPrivate/UserAccountProfile.tsx";

function App() {
    const {user} = useAppSelector((state) => state.user)
    const token = localStorage.getItem('token');
    const [getPermission , setPermissionReset] = useState<boolean>(false);
    const [permissionFromLogin , setPermissionLogin] = useState(token || false);
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!token) return
        axios.get(`https://spacey-server.vercel.app/auth/token/${token}`).then(res => {
            if (!res.data.user) return;
            setPermissionReset(true)
            dispatch( setUser(res.data.user))
        })
    }, [token || user]);

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'shop-grid'} element={<ShopGrid/>}/>
                    <Route element={<PrivateRoute to={'/user-account/login'} isAuth={permissionFromLogin}/>}>
                        <Route path={'payment-grid'} element={<PaymentPage/>}>
                            <Route path={':idUser'} element={<Billing/>}></Route>
                            <Route path={'check/:idOrder'} element={<CheckOutPayment/>}></Route>
                            <Route path={':idOrder/:idCard?/pay-card'} element={<PayCard/>}></Route>
                            <Route path={'basket'} element={<ShoppingCart/>}></Route>
                        </Route>
                    </Route>
                    <Route path={'/ComparePage'} element={<ComparePage/>}>
                        <Route index element={<Compare/>}/>
                    </Route>
                    <Route path={'/FAQ'} element={<FaqPage/>}/>
                    <Route path={'track-order'} element={<TrackOrder/>}/>
                    <Route path={'/track-order/:orderId'} element={<TrackOrderStatus/>}>
                        <Route index element={<TrackOrderWrapper/>}/>
                    </Route>
                    <Route element={<PrivateRoute to={'/user-account/login'} isAuth={permissionFromLogin}/>}>
                        <Route path={'user-account'} element={<UserAccountProfile/>}>
                        <Route path={'/user-account/dashboard'} element={<DashBoardPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'user-account'} element={<UserAccount/>}>
                        <Route path={'reset-password/active/:token'} element={<ActiveTokenReset callback={setPermissionReset}/>}></Route>
                        <Route element={<PrivateRoute to={'login'} isAuth={getPermission}/>}>
                            <Route path={'login/reset-password'} element={<ResetPassword callback={setPermissionReset}/>}/>
                        </Route>
                        <Route path={'login'} element={<Login callback={setPermissionLogin}/>}/>
                        <Route element={<PrivateRoute to={'login'} isAuth={permissionFromLogin}/>}>
                            {/*блок который нужно будет вводить числа с емайла */}
                        </Route>
                        <Route path={'sign-up'} element={<SignUp callback={setPermissionLogin}/>}/>
                        <Route path={'login/forget-password'} element={<ForgetPassword />}/>
                    </Route>
                    <Route path={'help'} element={<HelpPage/>}></Route>
                    <Route element={<PrivateRoute to={'/user-account/login'} isAuth={permissionFromLogin}/>}>
                        <Route path={'/wish'} element={<WishPage/>}>
                            <Route index  element={<Wish/>}></Route>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFound/>}/>
                    <Route path={'/product/:productId'} element={<ProductDetail/>}></Route>
                    <Route path={'/about'} element={<AboutUs/>}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
