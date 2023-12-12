import React, {FormEvent, useState} from 'react';
import 'react-credit-cards/es/styles-compiled.css'
import style from './PayCard.module.scss'
import Card from "react-credit-cards";
import '../card.scss'
import {useNavigate, useParams} from "react-router-dom";
import {Focused, payOrderHandler} from "./PayCardAssists.ts";
import InputCard from "./InputCard/InputCard.tsx";


const PayCard = () => {
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
                <Card number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name}
                      focused={state.focus} preview={true}></Card>

                <form onSubmit={submitForm}>
                    <InputCard value={state.number} name={'number'} placeholder={'Card Number'} type={'number'} maxLength={16}
                               focusHandler={handleInputFocus} changeHandler={handleInputChange}></InputCard>

                    <InputCard value={state.name} name={'name'} placeholder={'Your Name'} type={'text'} maxLength={16}
                               focusHandler={handleInputFocus} changeHandler={handleInputChange}></InputCard>
                    <div className={style.dateWrapper}>
                        <InputCard value={state.expiry} name={'expiry'} placeholder={'Expire'} type={'date'} maxLength={16}
                                   focusHandler={handleInputFocus} changeHandler={handleInputChange}></InputCard>

                        <InputCard value={state.cvc} name={'cvc'} placeholder={'CVC'} type={'number'} maxLength={3}
                                   focusHandler={handleInputFocus} changeHandler={handleInputChange}></InputCard>
                    </div>
                    <div className={style.btn}>
                        <button type={'submit'}>PAY</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default PayCard;