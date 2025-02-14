export interface IGetDiscountItemProps {
    idItem: string
}

export interface IDiscountItem {
    brand : string,
    product : {
        description : string,
        price : string
    }
}