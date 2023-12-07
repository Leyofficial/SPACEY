import toast from "react-hot-toast";
import {useAddToWish} from "../../hooks/wish/useAddToWish.ts";
import {IBigDealItem, ISmallDeal} from "../../Pages/MainPage/types.ts";
export function addToWist( user : any,  item : ISmallDeal | IBigDealItem | any) {
    if (!user && !item) return
    console.log(user)
    toast.success('Product added to your wish!')
    useAddToWish(user._id , item._id).catch((err) => {
        toast.error(err)
    } );
}