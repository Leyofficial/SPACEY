import axios from "axios";


export const getBasketItems = async (idUser: string,setIsLoading?:(arg:boolean) => void) => {
    if(setIsLoading)
        setIsLoading(true)


    return await axios.get(`https://spacey-server.vercel.app/orders/${idUser}`)
}
export const addBasketItem = async (idUser:string, data:{idProduct:string,count:number,price:number | string},callback:(arg:boolean) => void) => {
    callback(true)
    return await axios.post(`https://spacey-server.vercel.app/orders/${idUser}`, {
        idProduct: data.idProduct,
        count:data.count,
        price:data.price
    })
}