import toast from "react-hot-toast";
import {useAddToCart} from "../../hooks/cart/useAddToCart.ts";
import {IWishItemServer} from "../../Pages/WishPage/types.ts";
import {errorToaster} from "../ToasterActions/ErrorToaster.tsx";

export function addToCart(user: { _id: string }, item: IWishItemServer) {
    if (!item && !user) return
    toast.success('Product added to your cart!');
    useAddToCart(user._id , item._id).catch((err) => {
        errorToaster(err)
    })
}
