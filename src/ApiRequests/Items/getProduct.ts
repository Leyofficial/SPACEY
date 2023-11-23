import axios from "axios";

export const getProduct = async (idProduct : string) => {
    return await axios.get(`https://spacey-server.vercel.app/api/${idProduct}`)
}