import React from "react";

export interface IWholeInfo {
    address: {
        city: string,
        country: string,
        region: string,
        street: string,
        zipCode: string,
    }
    email: string,
    orderNotes: string,
    phone: string,
    userName: {
        firstName: string,
        lastName: string,
        companyName: string,
    },
    date: string | Date,
    isPayed: boolean,
    cardDate: {
        number: string
        expiry: string
        cvc: string
        name: string
    },
    orderActivity: {
        activity: string,
        date: string,
        isReady: boolean,
        text: string,
        _id: string
    },
    orderId: string,
    paymentType: string,
    products: IProducts[],
    user: string,
    _id: string
}

export interface IProducts {
    count: number,
    idProduct: string,
    price: number,
    _id: string
}
export interface ICard {
    cardData: ICardWrapper
}

export interface ICardWrapper {
    number: string
    expiry: string
    cvc: string
    name: string
}

export interface IOrderInfo {
    background : string,
    numberOfOrders : string | number,
    icon : React.ReactNode,
    text : string
}