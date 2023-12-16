import axios from "axios";
import {IBillingFormValues, IProducts} from "../../Pages/PaymentPage/payment.types.ts";


interface INewOrderData {
    paymentType: string | null,
    date: Date,
    dataBilling:IBillingFormValues,
    products: IProducts[],
    user: string,
    orderId:string
}
export interface ICardDate{

    number:string,
    expiry:Date | string,
    cvc:string | number,
    name:string


}

export const createNewOrder = async (data: INewOrderData) => {
    return await axios.post(`https://spacey-server.vercel.app/processOrder`, {...data
    })
}
export const updatePaymentStatus = async (idOrderProcessing: string | undefined,cardDate : ICardDate) => {
    return await axios.patch(`https://spacey-server.vercel.app/processOrder/${idOrderProcessing}`,{cardDate})
}
export const deleteOrder = async (idOrder:string | undefined) => {
    return await axios.post(`https://spacey-server.vercel.app/orders/delete/${idOrder}`)
}

export const saveCard = async (idUser:string,paymentCard:ICardDate) => {
    return await axios.patch(`https://spacey-server.vercel.app/auth/card/${idUser}`,paymentCard)
}