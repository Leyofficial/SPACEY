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
        zipCode: string | number
    },
    email: string,
    phone: string,
    payment: {
        cardName: string,
        cardNumber: number | string,
        expireDate: string,
        cvc: number | string,
    }
    orderNotes: string
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