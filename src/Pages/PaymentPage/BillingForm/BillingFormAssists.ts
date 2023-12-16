
import {createNewOrder, deleteOrder} from "../../../ApiRequests/Billing/Billing.ts";
import {ISubmitForm} from "./BillingFormTypes.ts";

export const submitBillingForm = ({userId, selectRadio, values, products, idOrder, navigate}: ISubmitForm) => {

    if (userId) {
        const billingData = {
            paymentType: selectRadio,
            date: new Date(),
            dataBilling: values,
            products,
            user: userId,
            orderId:randomCode()
        }
        createNewOrder(billingData).then(res => {
            if(res.status === 200){
                deleteOrder(idOrder).then(res => console.log(res)).catch(err => console.log(err))
                if(billingData.paymentType === 'card') {
                    navigate(`/payment-grid/${idOrder}/${res.data.createOrder._id}/pay-card`)
                }else {
                    navigate(`/payment-grid/check/${idOrder}`)
                }
            }
        })
    }

}


export const randomCode = () => {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 8; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return code;
}


