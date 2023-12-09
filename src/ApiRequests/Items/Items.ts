import axios from "axios";


export function getAllItems () {
   return  axios.get('https://spacey-server.vercel.app/api');
}

export const deleteCartItem = (idUser:string,idProduct:string) => {
   return axios.patch(`https://spacey-server.vercel.app/orders/${idUser}`,{
      idItem:idProduct
   })
}