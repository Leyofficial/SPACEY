import axios from "axios";

export function useAddToWish(idUser : string | any , idProduct : string) {
    return axios.post(`https://spacey-server.vercel.app/wishList/${idUser}` , {
        item : idProduct
    })
}