import axios from "axios";

export function useAddToWish(idUser : string , idProduct : string) {
    if (!idProduct && !idUser) return
    return axios.post(`https://spacey-server.vercel.app/wishList/${idUser}` , {
        item : idProduct
    })
}