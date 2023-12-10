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

export interface IProducts {

    count: number | string,
    idProduct: string,
    _id: string,
    price: string | number

}

export interface IOrderProducts {
    products: IProducts,
    idOrder: string
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

export interface IBillingFormValues {
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
        zipCode: string,
    },
    email: string,
    phone: string,
    orderNotes: string
}