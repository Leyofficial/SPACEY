import style from './Payment.module.scss';
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import {Outlet} from "react-router-dom";

const PaymentPage = () => {
    return (
        <article className={style.container}>
            <header>
                <BreadCrumb/>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </article>
    );
};

export default PaymentPage;