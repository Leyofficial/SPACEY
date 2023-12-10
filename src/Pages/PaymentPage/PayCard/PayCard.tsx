import {useState} from 'react';
import 'react-credit-cards/es/styles-compiled.css'
import style from './PayCard.module.scss'
import Card from "react-credit-cards";
import '../card.scss'
import {useNavigate, useParams} from "react-router-dom";
import {updatePaymentStatus} from "../../../ApiRequests/Billing/Billing.ts";


const PayCard = () => {
    const {idOrder,idCard} = useParams<string>()
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });
    const navigate = useNavigate()

 const payOrderHandler = (e) => {
     e.preventDefault()
     const cardDate = {
         number:state.number,
         expiry:state.expiry,
         cvc:state.cvc,
         name:state.name,
     }
     updatePaymentStatus(idCard,cardDate).then(res => {
         if(res.status === 200){
             setTimeout(() => {
                 if(idCard){
                     navigate(`/payment-grid/check/${idOrder}`)
                 }else{
                     navigate(`/payment-grid/check/${idOrder}`)
                 }


             },1000)

         }
     })
 }
    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
        if (value.length > 3 && name === 'cvc') {
            return
        } else {
            setState((prev) => ({...prev, [name]: value}));
        }

    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({...prev, focus: evt.target.name}));
    }



    return (
        <section className={style.container}>
            <div className={style.wrapperOrderId}>
                <p className={style.orderId}>Payment for the order according to this <span>#{idOrder}</span> id order</p>
            </div>

            <div className={style.containerCard}>
                <Card number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name}
                      focused={state.focus} preview={true}></Card>
                <form onSubmit={payOrderHandler}>
                    <input
                        type="number"
                        name="number"
                        placeholder="Card Number"
                        value={state.number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        maxLength={16}

                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={state.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <div className={style.dateWrapper}>
                        <input
                            type="date"
                            name="expiry"
                            placeholder="Expire"
                            value={state.expiry}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <input
                            type="number"
                            name="cvc"
                            placeholder="CVC"
                            value={state.cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            maxLength={3}
                        />
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