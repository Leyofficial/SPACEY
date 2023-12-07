import toast from "react-hot-toast";
import {useAddToCart} from "../../hooks/cart/useAddToCart.ts";
import {IBigDealItem, ISmallDeal} from "../../Pages/MainPage/types.ts";

export function addToCart( user : any, item :  ISmallDeal | IBigDealItem | any) {
    if (!item && !user) return
    toast.success('Product added to your cart!');
    useAddToCart(user._id , item._id).catch((err) => {
        toast.error(err)
    })
}