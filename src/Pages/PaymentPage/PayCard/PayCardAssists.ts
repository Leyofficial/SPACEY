import {FormEvent} from "react";
import {updatePaymentStatus} from "../../../ApiRequests/Billing/Billing.ts";
export type Focused = "name" | "number" | "expiry" | "cvc";
interface ICardState{
    number:string,
    expiry:string,
    cvc:string,
    name:string,
    focus:Focused
}
interface IPayHandler {
    e:FormEvent<HTMLFormElement>,
    state:ICardState,
    idCard:string | undefined,
    idOrder:string | undefined,
    navigate:(arg:string) => void

}
export  const payOrderHandler =  ({e,state,idCard,idOrder,navigate}:IPayHandler) => {
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