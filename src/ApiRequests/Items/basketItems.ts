import axios from "axios";


export const getBasketItems = async (idUser:string) => {
    return await axios.get(`https://spacey-server.vercel.app/orders/${idUser}`)
}