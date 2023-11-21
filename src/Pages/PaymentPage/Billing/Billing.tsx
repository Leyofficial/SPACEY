import style from './Billing.module.scss';
import BillingForm from "../BillingForm/BillingForm.tsx";

const Billing = () => {
    return (
        <div className={style.billing}>
            <BillingForm></BillingForm>
        </div>
    );
};

export default Billing;