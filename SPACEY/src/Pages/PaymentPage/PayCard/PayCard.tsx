import React, {FormEvent, useState} from 'react';
import 'react-credit-cards/es/styles-compiled.css'
import style from './PayCard.module.scss'
import Card from "react-credit-cards";
import '../card.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks.ts";
import {payOrderHandler} from "./PayCardAssists.ts";
import {saveCard} from "../../../ApiRequests/Billing/Billing.ts";
import {CustomInput} from "../../../Utility/CustomInput/CustomInput.tsx";
import {setUser} from "../../../redux/user/reducers/UserSlice.ts";
import {successToaster} from "../../../Utility/ToasterActions/SuccessToaster.tsx";

const PayCard = () => {
    const dispatch = useAppDispatch();
    type Focused = "name" | "number" | "expiry" | "cvc";
    const {user} = useAppSelector(state => state.user)
    const navigate = useNavigate()
    const {idOrder,idCard} = useParams<string>()
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '' as Focused ,
    });


    const submitForm = (e:FormEvent<HTMLFormElement>) => {
        saveCard(user?._id,state).then((res) => {
            dispatch(setUser(res.data.updatedUser));
            successToaster();
        }).catch(err => console.log(err))
        payOrderHandler({e,state,idCard,idOrder,navigate})
    }
    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evt.target;
        if (value.length > 3 && name === 'cvc') {
            return
        } else {
            setState((prev) => ({...prev, [name]: value}));
        }

    }
    const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
        setState((prev) => ({...prev, focus: evt.target.name as Focused}));
    }

    return (
        <section className={style.container}>
            <div className={style.wrapperOrderId}>
                <p className={style.orderId}>Payment for the order according to this <span>#{idOrder}</span> id order</p>
            </div>

            <div className={style.containerCard}>
                <div className={style.card}>
                <Card number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name}
                      focused={state.focus} preview={true}></Card>
                </div>

                <form onSubmit={submitForm}>
                    <CustomInput value={state.number} name={'number'} label={'Card Number'} type={'number'} maxLength={16}
                               focusHandler={handleInputFocus} changeHandler={handleInputChange}></CustomInput>

                    <CustomInput value={state.name} name={'name'} label={'Your Name'} type={'text'} maxLength={16}
                                 focusHandler={handleInputFocus} changeHandler={handleInputChange}></CustomInput>
                        <CustomInput value={state.expiry} name={'expiry'} label={'Expire'} type={'date'} maxLength={16}
                                   focusHandler={handleInputFocus} changeHandler={handleInputChange}></CustomInput>

                        <CustomInput value={state.cvc} name={'cvc'} label={'CVC'} type={'number'} maxLength={3}
                                     focusHandler={handleInputFocus} changeHandler={handleInputChange}></CustomInput>
                    <div className={style.btn}>
                        <button type={'submit'}>Add new card</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default PayCard;