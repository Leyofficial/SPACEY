export interface IOrderAcitivity {
    activity : string,
    date : string,
    isReady : string,
    text : string,
    _id : string
}
export interface IOrderProduct {
    count : number ,
    idProduct : string,
    price : number,
    _id : string
}
export interface IOrderInfo {
    dataBilling: {
        email : string,
    }
    date : string,
    isPayed : boolean,
    orderActivity : IOrderAcitivity[],
    orderId : string,
    paymentType : string,
    products : IOrderProduct[],
    user : string,
    _id : string
}
