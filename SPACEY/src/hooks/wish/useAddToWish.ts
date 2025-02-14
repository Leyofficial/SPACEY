import axios from "axios";

export function useAddToWish(
  idUser: string | undefined,
  idProduct: string | undefined
) {
  if (!idProduct || !idUser)
    return Promise.reject("Invalid user or product ID");
  return axios.post(`https://spacey-server-two.vercel.app/wishList/${idUser}`, {
    item: idProduct,
  });
}
