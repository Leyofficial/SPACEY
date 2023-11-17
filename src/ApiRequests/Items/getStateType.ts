import axios from "axios";

export const getStateType = async (item: string) => {
    const response = await axios.get(`https://spacey-server.vercel.app/api/product?stateType=${item}`)

    const data = await response;

    return data;
}