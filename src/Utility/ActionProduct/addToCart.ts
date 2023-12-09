import {IWishItemServer} from "../../Pages/WishPage/types.ts";
import {successToaster} from "../ToasterActions/SuccessToaster.tsx";
import {useAddToCart} from "../../hooks/cart/useAddToCart.ts";
import {errorToaster} from "../ToasterActions/ErrorToaster.tsx";


export function addToCart(user: { _id: string }, item: IWishItemServer | any) {
    if (!item && !user) return
    successToaster('Product added to your cart!');
    useAddToCart(user._id , item._id).catch((err) => {
        errorToaster(err)
    })
}
