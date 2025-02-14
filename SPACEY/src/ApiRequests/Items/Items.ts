import axios from "axios";

export function getAllItems() {
  return axios.get("https://spacey-server-two.vercel.app/api");
}

export const deleteCartItem = (idUser: string, idProduct: string) => {
  return axios.patch(`https://spacey-server-two.vercel.app/orders/${idUser}`, {
    idItem: idProduct,
  });
};
