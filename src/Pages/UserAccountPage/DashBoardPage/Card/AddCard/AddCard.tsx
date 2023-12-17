import style from './AddCard.module.scss'
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks/hooks.ts";
import {useNavigate, useParams} from "react-router-dom";
import React, {FormEvent, useState} from "react";
import {saveCard} from "../../../../../ApiRequests/Billing/Billing.ts";
import {payOrderHandler} from "../../../../PaymentPage/PayCard/PayCardAssists.ts";
import Card from "react-credit-cards";
import {CustomInput} from "../../../../../Utility/CustomInput/CustomInput.tsx";
import './card.scss'
import {successToaster} from "../../../../../Utility/ToasterActions/SuccessToaster.tsx";
import {Toaster} from "react-hot-toast";
import {setUser} from "../../../../../redux/user/reducers/UserSlice.ts";
export function AddCard() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    type Focused = "name" | "number" | "expiry" | "cvc";
    const {user} = useAppSelector(state => state.user)
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
            successToaster('Card successfully added');
            setTimeout(() => {
                navigate('/user-account/dashboard')
            },3000)
        }).catch(err => console.log(err));
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
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <div className={style.containerCard}>
            <div className={style.card}>
                <Card
                    number={state.number}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                    preview={true}
                ></Card>
            </div>
            <div>
                <form className={style.wrapperBlock} onSubmit={submitForm}>
                    <CustomInput
                        maxLength={20}
                        name={'number'}
                        label={'Card Number'}
                        focusHandler={handleInputFocus}
                        changeHandler={handleInputChange}
                        value={state.number}
                        type={'number'}
                    />

                    <CustomInput
                        value={state.name}
                        name={'name'}
                        label={'Your Name'}
                        type={'text'}
                        maxLength={16}
                        focusHandler={handleInputFocus}
                        changeHandler={handleInputChange}
                    />
                    <div className={`${style.dateWrapper} ${style.wrapperBlock}`}>
                        <CustomInput
                            value={state.expiry}
                            name={'expiry'}
                            label={'Expire'}
                            type={'date'}
                            maxLength={16}
                            focusHandler={handleInputFocus}
                            changeHandler={handleInputChange}
                        />

                        <CustomInput
                            value={state.cvc}
                            name={'cvc'}
                            label={'CVC'}
                            type={'number'}
                            maxLength={3}
                            focusHandler={handleInputFocus}
                            changeHandler={handleInputChange}
                        />
                    </div>
                    <div className={style.btn}>
                        <button type={'submit'}>Add new card</button>
                    </div>
                </form>
            </div>
        </div>

    </section>
    )
}