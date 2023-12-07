import axios from "axios";

export function useCheckInCart(idItem: string | undefined, idUser: string) {
    if (!idUser && !idItem) return
    return  axios.get(`https://spacey-server.vercel.app/orders/cart/${idUser}/${idItem}`);
}