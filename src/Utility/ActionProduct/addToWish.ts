import toast from "react-hot-toast";
import {useAddToWish} from "../../hooks/wish/useAddToWish.ts";
export function addToWist( user : { _id : string },  item :  {_id : string}) {
    if (!user && !item) return
    toast.success('Product added to your wish!')
    useAddToWish(user._id , item._id).catch((err) => {
        toast.error(err)
    } );
}