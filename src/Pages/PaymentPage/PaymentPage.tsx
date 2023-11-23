import style from './Payment.module.scss';
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer/Footer.tsx";

const PaymentPage = () => {
    return (
        <article className={style.container}>
            <header>
                <BreadCrumb/>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </article>
    );
};

export default PaymentPage;