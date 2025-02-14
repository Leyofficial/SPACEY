
import {IProducts, Values} from "../payment.types.ts";


export interface ISubmitForm{
    userId:string,
    selectRadio:string | null,
    values:Values,
    products:IProducts[],
    idOrder:string,
    navigate:(arg:string) => void
}

export interface IFormFields{
    selectHandler:(arg:string) => void,
    products:IProducts[],
    idOrder:string
}