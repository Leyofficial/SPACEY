import axios from "axios";

export function useAddToCart(idUser : string , idProduct : string) {
    return axios.post(`https://spacey-server.vercel.app/orders/${idUser}` , {
         idProduct,
    })
}