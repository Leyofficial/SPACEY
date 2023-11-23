export interface Values {
    userName: {
        firstName: string,
        lastName: string,
        companyName: string
    },
    address: {
        street: string,
        country: string,
        region: string,
        city: string,
        zipCode: string
    },
    email: string,
    phone: string,
    payment: {
        cardName: string,
        cardNumber: string,
        expireDate: string,
        cvc: string,
    }
    orderNotes: string
}

export interface IOrderProducts{
    products:[{
        count:number,
        idProduct:string,
        _id:string
    }]
}

export const billingFormValues = {
    userName: {
        firstName: "",
        lastName: "",
        companyName: ""
    },
    address: {
        street: "",
        country: "",
        region: "",
        city: "",
        zipCode: "",
    },

    payment: {
        cardName: "",
        cardNumber: "",
        expireDate: "",
        cvc: "",
    },
    email: "",
    phone: "",
    orderNotes: ""
}