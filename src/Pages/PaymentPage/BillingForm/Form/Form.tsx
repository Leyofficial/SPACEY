import style from "../BillingForm.module.scss";
import CustomField from "../CustomField/CustomField.tsx";
import RowRadioButtonsGroup from "../CustomRadio/CustomRadio.tsx";
import SummeryProduct from "../../SummeryProduct/SummeryProduct.tsx";
import {FaArrowRight} from "react-icons/fa";
import {Form} from "formik";
import {IFormFields} from "../BillingFormTypes.ts";
const FormFields = ({selectHandler,products,idOrder}:IFormFields) => {
    return (
        <>
            <Form className={style.billingForm}>
                <div className={style.mainForm}>
                    <div className={style.fieldName}>
                        <div className={style.blockNames}>
                            <CustomField typeField={'text'} id={'userName.firstName'}
                                         htmlFor={"userName.firstName"}
                                         placeholder={'First Name'} title={'First name'}></CustomField>
                            <CustomField typeField={'text'} id={'userName.lastName'}
                                         htmlFor={"userName.lastName"}
                                         placeholder={'Last Name'}></CustomField>
                        </div>

                        <div className={style.companyName}>
                            <CustomField required={false} typeField={'text'} id={'userName.companyName'}
                                         htmlFor={"userName.companyName"}
                                         title={'Company name (Optional)'}></CustomField>
                        </div>

                    </div>
                    <div className={style.street}>
                        <CustomField typeField={'text'} id={"address.street"} placeholder={'St.Ponte Alto'}
                                     htmlFor={"address.street"} title={'Street'}></CustomField>
                    </div>

                    <div className={style.addressWrapper}>
                        <div>
                            <CustomField typeField={'text'} id={"address.city"} placeholder={'Kiev'}
                                         htmlFor={"address.city"} title={'City'}></CustomField>
                            <CustomField typeField={'text'} id={"address.country"} placeholder={'Ukraine'}
                                         htmlFor={"address.country"} title={'Country'}></CustomField>
                        </div>
                        <div>
                            <CustomField typeField={'text'}
                                         id={"address.region"} placeholder={'Europe'} htmlFor={"address.region"}
                                         title={'Region'}></CustomField>
                            <CustomField typeField={'text'} id={"address.zipCode"} htmlFor={"address.zipCode"}
                                         title={'Zip Code'} placeholder={'35010'}></CustomField>
                        </div>
                    </div>
                    <div className={style.emailWrapper}>
                        <CustomField typeField={'email'} placeholder={'spacey@work.shop'} id={"email"}
                                     htmlFor={"email"} title={'Email'}></CustomField>
                        <CustomField typeField={'tel'} placeholder={'+39 54 99 4241'} id={"phone"}
                                     htmlFor={"phone"} title={'Phone number'}></CustomField>
                    </div>
                    <div className={style.cartDataWrapper}>
                        <div className={style.radioWrapper}>
                            <RowRadioButtonsGroup callback={selectHandler}></RowRadioButtonsGroup>
                        </div>
                    </div>
                    <div className={style.notesWrapper}>
                        <CustomField typeField={'text'}
                                     placeholder={'Notes about your order,e.g. special notes for delivery'}
                                     isTextArea={'Textarea'} id={"orderNotes"} htmlFor={"orderNotes"}
                                     title={'Order Notes'}></CustomField>
                    </div>
                </div>
                <section className={style.summerWrapper}>
                    <div className={style.summer}>
                        <SummeryProduct products={products} idOrder={idOrder}></SummeryProduct>
                        <button type='submit'>PLACE ORDER <FaArrowRight/></button>
                    </div>
                </section>
            </Form>
        </>
    );
};

export default FormFields;