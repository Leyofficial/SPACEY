import style from './BillingForm.module.scss';
import {Form, Formik, FormikHelpers} from "formik";
import CustomField from "./CustomField/CustomField.tsx";
import {billingFormValues, IOrderProducts, Values} from "../payment.types.ts";
import {getCountries} from "../../../ApiRequests/getCountries/getCountries.ts";
import {useEffect, useState} from "react";
import CustomSelectForm from "./CustomSelect/CustomSelect.tsx";
import RowRadioButtonsGroup from "./CustomRadio/CustomRadio.tsx";
import SummeryProduct from "../SummeryProduct/SummeryProduct.tsx";
import {NavLink} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";


const validate = (value : string) => {
    let errorMessage;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errorMessage = 'Invalid email address';
    }
    return errorMessage;
};
const BillingForm = ({products} : IOrderProducts) => {
    const [countries, setCountries] = useState<any | null>(null)
    useEffect(() => {
        getCountries().then(res => setCountries(res.data))
    }, [])


    const submitFormHandler = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className={style.containerForm}>
                <h2>Billing information</h2>
                <Formik initialValues={billingFormValues}
                        onSubmit={(values: Values, {setSubmitting}: FormikHelpers<Values>) => {

                            console.log(values)
                            setSubmitting(false)
                        }}
                >
                    <Form className={style.billingForm} onSubmit={submitFormHandler}>
                        <div className={style.mainForm}>
                        <div className={style.fieldName}>
                            <div className={style.blockNames}>
                                <CustomField validate={validate} typeField={'text'} id={'userName.firstName'} htmlFor={"userName.firstName"}
                                             placeholder={'First Name'} title={'First name'}></CustomField>
                                <CustomField validate={validate}  typeField={'text'} id={'userName.lastName'} htmlFor={"userName.lastName"}
                                             placeholder={'Last Name'}></CustomField>
                            </div>

                            <div className={style.companyName}>
                                <CustomField validate={validate}  typeField={'text'} id={'userName.companyName'} htmlFor={"userName.companyName"}
                                             title={'Company name (Optional)'}></CustomField>
                            </div>

                        </div>
                        <div className={style.street}>
                            <CustomField validate={validate}  typeField={'text'} id={"address.street"} placeholder={'St.Ponte Alto'} htmlFor={"address.street"} title={'Street'}></CustomField>
                        </div>
                        <div className={style.addressWrapper}>
                            <CustomSelectForm  dataToMap={'name.official'} countries={countries} id={"address.country"}
                                              htmlFor={"address.country"} title={'Country'}></CustomSelectForm>
                            <CustomSelectForm  dataToMap={'region'} countries={countries} id={"address.regional"}
                                              htmlFor={"address.regional"} title={'Regional'}></CustomSelectForm>
                            <CustomSelectForm dataToMap={'capital'} countries={countries} id={"address.capital"}
                                              htmlFor={"address.capital"} title={'City'}></CustomSelectForm>
                            <CustomField validate={validate}  typeField={'text'} id={"address.zipCode"} htmlFor={"address.zipCode"}
                                         title={'Zip Code'} placeholder={'35010'}></CustomField>
                        </div>
                        <div className={style.emailWrapper}>
                            <CustomField validate={validate}   typeField={'email'} placeholder={'spacey@work.shop'} id={"email"} htmlFor={"email"} title={'Email'}></CustomField>
                            <CustomField validate={validate}  typeField={'tel'} placeholder={'+39 54 99 4241'} id={"phone"} htmlFor={"phone"} title={'Phone number'}></CustomField>
                        </div>
                        <div className={style.cartDataWrapper}>
                            <div className={style.radioWrapper}>
                                <RowRadioButtonsGroup></RowRadioButtonsGroup>
                            </div>
                        </div>
                        <div className={style.notesWrapper}>
                            <CustomField validate={validate}  typeField={'text'} placeholder={'Notes about your order,e.g. special notes for delivery'} isTextArea={'Textarea'} id={"orderNotes"} htmlFor={"orderNotes"} title={'Order Notes'}></CustomField>
                        </div>
                        </div>
                        <section className={style.summerWrapper}>
                            <div className={style.summer}>
                                <SummeryProduct products={products}></SummeryProduct>

                                    <button type={'submit'} >PLACE ORDER    <FaArrowRight /></button>


                            </div>
                        </section>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default BillingForm;