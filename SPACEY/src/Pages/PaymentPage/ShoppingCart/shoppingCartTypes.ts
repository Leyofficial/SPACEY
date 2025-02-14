import {IProduct} from "../../../types.ts";

export interface IShoppingItems{
    count:number,
    idProduct:string,
    _id:string,
    price:string | number

}
export interface ISingleProductProps {
    product: IShoppingItems,
    index: number,
    updateCart: () => void
}

export interface ICartProduct {
    product: IProduct
}
export interface  ICardTotalItems{
    totalData:IShoppingItems[] | null,
}