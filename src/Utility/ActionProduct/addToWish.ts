
import {useAddToWish} from "../../hooks/wish/useAddToWish.ts";
import {errorToaster} from "../ToasterActions/ErrorToaster.tsx";
import {successToaster} from "../ToasterActions/SuccessToaster.tsx";
export function addToWist(userId: string | undefined, itemId: string | undefined) {
    if (!userId || !itemId) return;
    successToaster('Product added to your wish!');
    useAddToWish(userId, itemId).catch((err) => {
        errorToaster(err);
    });
}