import axios from "axios";

export function useCheckInCart(idItem: string, idUser: string) {
  return axios.get(
    `https://spacey-server-two.vercel.app/orders/cart/${idUser}/${idItem}`
  );
}
