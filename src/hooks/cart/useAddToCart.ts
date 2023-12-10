import axios from "axios";

export function useAddToCart(idUser : string , idProduct : string,price:string | number) {
    return axios.post(`https://spacey-server.vercel.app/orders/${idUser}` , {
         idProduct,price
    })
}