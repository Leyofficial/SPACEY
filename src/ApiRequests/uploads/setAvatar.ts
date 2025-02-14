import axios from "axios";

export const setAvatar = (data: FormData) => {
  return axios.post(`https://spacey-server-two.vercel.app/uploads`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
export const saveAvatar = (idAvatar: string, idUser: string) => {
  return axios.patch(
    `https://spacey-server-two.vercel.app/auth/user/edit/${idUser}`,
    { newPicture: idAvatar }
  );
};
