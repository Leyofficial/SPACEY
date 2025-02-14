import style from './Payment.module.scss';
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer/Footer.tsx";

const PaymentPage = () => {
    return (
        <>
            <header>
                <BreadCrumb/>
            </header>
            <article className={style.container}>
                <main>
                    <Outlet></Outlet>
                </main>
            </article>
            <footer>
                <Footer></Footer>
            </footer>
        </>

    );
};

export default PaymentPage;