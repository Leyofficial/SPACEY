import toast from "react-hot-toast";
import {useAddToWish} from "../../hooks/wish/useAddToWish.ts";
export function addToWist(userId: string | undefined, itemId: string | undefined) {
    if (!userId || !itemId) return;
    toast.success('Product added to your wish!');
    useAddToWish(userId, itemId).catch((err) => {
        toast.error(err);
    });
}