import axios from "axios";

interface INewOrderData {
    paymentType: string,
    date: string,
    dataBilling: {
        userName: {
            firstName: string,
            lastName: string,
            companyName: string,
        },
        address: {
            street: string,
            country: string,
            region: string,
            city: string,
            zipCode: string | number,
        },
        email: string,
        phone: string | number,
        orderNotes: string
    },
    products: {
        count: number | string, price: string | number,
        idProduct: string,
        _id: string
    },
    user: string
}

export const createNewOrder = async (data: INewOrderData) => {
    console.log(data)
    return await axios.post(`https://spacey-server.vercel.app/processOrder`, {...data
    })
}
export const updatePaymentStatus = async (idOrderProcessing: string | undefined,cardDate) => {
    return await axios.patch(`https://spacey-server.vercel.app/processOrder/${idOrderProcessing}`,{cardDate})
}
export const deleteOrder = async (idOrder:string | undefined) => {
    return await axios.post(`https://spacey-server.vercel.app/orders/delete/${idOrder}`)
}