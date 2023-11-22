import style from './BillingForm.module.scss';
import {Form, Formik, FormikHelpers} from "formik";
import CustomField from "./CustomField/CustomField.tsx";
import {billingFormValues, IOrderProducts, Values} from "../payment.types.ts";
import {getCountries} from "../../../ApiRequests/getCountries/getCountries.ts";
import {useEffect, useState} from "react";
import CustomSelectForm from "./CustomSelect/CustomSelect.tsx";
import RowRadioButtonsGroup from "./CustomRadio/CustomRadio.tsx";
import SummeryProduct from "../SummeryProduct/SummeryProduct.tsx";



const BillingForm = ({products} : IOrderProducts) => {
    const [countries, setCountries] = useState<[any] | null>(null)
    useEffect(() => {
        getCountries().then(res => setCountries(res.data))
    }, [])


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
                    <Form className={style.billingForm}>
                        <div className={style.mainForm}>
                        <div className={style.fieldName}>
                            <div className={style.blockNames}>
                                <CustomField id={'userName.firstName'} htmlFor={"userName.firstName"}
                                             placeholder={'First Name'} title={'First name'}></CustomField>
                                <CustomField id={'userName.lastName'} htmlFor={"userName.lastName"}
                                             placeholder={'Last Name'}></CustomField>
                            </div>

                            <div className={style.companyName}>
                                <CustomField id={'userName.companyName'} htmlFor={"userName.companyName"}
                                             title={'Company name (Optional)'}></CustomField>
                            </div>

                        </div>
                        <div className={style.street}>
                            <CustomField id={"address.street"} placeholder={'St.Ponte Alto'} htmlFor={"address.street"} title={'Street'}></CustomField>
                        </div>
                        <div className={style.addressWrapper}>
                            <CustomSelectForm dataToMap={'name.official'} countries={countries} id={"address.country"}
                                              htmlFor={"address.country"} title={'Country'}></CustomSelectForm>
                            <CustomSelectForm dataToMap={'region'} countries={countries} id={"address.regional"}
                                              htmlFor={"address.regional"} title={'Regional'}></CustomSelectForm>
                            <CustomSelectForm dataToMap={'capital'} countries={countries} id={"address.capital"}
                                              htmlFor={"address.capital"} title={'City'}></CustomSelectForm>
                            <CustomField id={"address.zipCode"} htmlFor={"address.zipCode"}
                                         title={'Zip Code'} placeholder={'35010'}></CustomField>
                        </div>
                        <div className={style.emailWrapper}>
                            <CustomField placeholder={'spacey@work.shop'} id={"email"} htmlFor={"email"} title={'Email'}></CustomField>
                            <CustomField placeholder={'+39 54 99 4241'} id={"phone"} htmlFor={"phone"} title={'Phone number'}></CustomField>
                        </div>
                        <div className={style.cartDataWrapper}>
                            <div className={style.radioWrapper}>
                                <RowRadioButtonsGroup></RowRadioButtonsGroup>
                            </div>
                            <div className={style.wrapperFieldsCard}>


                            <CustomField id={"payment.cardName"} htmlFor={"payment.cardName"}
                                         title={'Name on Card'} placeholder={'Volodymyr Lupashko'}></CustomField>
                            <CustomField id={"payment.cardNumber"} htmlFor={"payment.cardNumber"}
                                         title={'Card Number'} placeholder={'0000 0000 0000 0000'}></CustomField>

                            <div className={style.cardWrapper}>
                                <CustomField id={"payment.expireDate"} placeholder={'DD/YY'} htmlFor={"payment.expireDate"}
                                             title={'Expire Date'}></CustomField>
                                <CustomField id={"payment.cvc"} placeholder={"062"} htmlFor={"payment.cvc"}  title={'CVC'}></CustomField>
                            </div>
                            </div>
                        </div>
                        <div className={style.notesWrapper}>
                            <CustomField placeholder={'Notes about your order,e.g. special notes for delivery'} isTextArea={'Textarea'} id={"orderNotes"} htmlFor={"orderNotes"} title={'Order Notes'}></CustomField>
                        </div>
                        </div>
                        <section className={style.summerWrapper}>
                            <SummeryProduct products={products}></SummeryProduct>
                        </section>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default BillingForm;