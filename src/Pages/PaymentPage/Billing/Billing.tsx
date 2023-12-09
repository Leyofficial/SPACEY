import style from './Billing.module.scss';
import BillingForm from "../BillingForm/BillingForm.tsx";
import {useParams} from "react-router-dom";
import {UseCustomQuery} from "../../../ApiRequests/customQuery/customQuery.ts";

const Billing = () => {

    const {idUser} = useParams()
    const {data} = UseCustomQuery(`https://spacey-server.vercel.app/orders/${idUser}`)

    return (
        <div className={style.billing}>
            <BillingForm products={data?.foundOrders?.products} idOrder={data?.foundOrders._id}></BillingForm>
        </div>
    );
};

export default Billing;