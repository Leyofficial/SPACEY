import {ICategory} from "../../types.ts";
import {ReactNode} from "react";
import {addBasketItem} from "../../ApiRequests/Items/basketItems.ts";
import toast from "react-hot-toast";


export interface IProductImagesSliderProps {
    images: {
        mainImage: string,
        restImages: [{
            images: [string],
            color: string
        }]
    }
}

export interface ISliderItemsProps {
    imageId: string,
    callback: (arg: number) => void,
    index: number
}

export interface IProductInfoProps {
    product: ICategory
}

export interface ITabItems {
    tab: string,
    content: ReactNode
}
export const statusProductItems = ['RELATED PRODUCT','PRODUCT ACCESSORIES','APPLE PRODUCT','FEATURED PRODUCTS']
interface IAddCartItem{
    data:{ idProduct: string, count: number, price: number | string },
    setProcess:(arg:boolean) => void,
    userId:string
}
export const addCartItem = ({data, setProcess, userId}:IAddCartItem) => {

    addBasketItem(userId, data,setProcess).then(res => {
        if(res.status === 200) {
            toast.success('The product was added to your cart')
            setTimeout(() => {
                setProcess(false)
            },500)

        }else if (res.status === 201) {
            toast.error('This product is already in your cart')
            setTimeout(() => {

                setProcess(false)
            },500)
        }
    })
}
