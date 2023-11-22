import style from './Billing.module.scss';
import BillingForm from "../BillingForm/BillingForm.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {UseCustomQuery} from "../../../ApiRequests/customQuery/customQuery.ts";

const Billing = () => {

    const {idUser} = useParams()
    const [productIds,setProductIds] = useState(null)

    const {data} = UseCustomQuery(`https://spacey-server.vercel.app/orders/${idUser}`)
    console.log(data)



    return (
        <div className={style.billing}>
            <BillingForm products={data?.foundOrders.products}></BillingForm>
        </div>
    );
};

export default Billing;