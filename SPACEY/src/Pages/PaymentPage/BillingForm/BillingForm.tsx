import style from './BillingForm.module.scss';
import {Formik, FormikHelpers} from "formik";
import {billingFormValues, IOrderProducts, Values} from "../payment.types.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAppSelector} from "../../../redux/hooks/hooks.ts";
import {submitBillingForm} from "./BillingFormAssists.ts";
import FormFields from "./Form/Form.tsx";

const BillingForm = ({products, idOrder}: IOrderProducts) => {

    const navigate = useNavigate()
    const [selectRadio, setSelectRadio] = useState<string | null>(null)
    const {user} = useAppSelector(state => state.user)
    const selectRadioHandler = (radioName: string) => {
        setSelectRadio(radioName)
    }
    return (
        <>
            <div className={style.containerForm}>
                <h2>Billing information</h2>
                <Formik initialValues={billingFormValues}
                        onSubmit={(values: Values, {setSubmitting}: FormikHelpers<Values>) => {
                            const userId = user?._id
                            submitBillingForm({userId, selectRadio, values, products, idOrder, navigate})
                            setSubmitting(false)
                        }}
                >
                    <FormFields selectHandler={selectRadioHandler} products={products} idOrder={idOrder}></FormFields>
                </Formik>
            </div>
        </>
    );
};

export default BillingForm;