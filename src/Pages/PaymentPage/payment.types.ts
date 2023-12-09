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
    orderNotes: string
}

export interface IOrderProducts{
    products:[{
        count:number,
        idProduct:string,
        _id:string
    }],
    idOrder:string
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
    email: "",
    phone: "",
    orderNotes: ""
}