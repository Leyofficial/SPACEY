import axios from "axios";
import { IUserState } from "../../redux/user/reducers/UserSlice.ts";

export const editUser = (data: IUserState) => {
  return axios.post(
    `https://spacey-server-two.vercel.app/auth/user/edit/${data.user._id}`,
    data.user
  );
};

export const subscribe = (email: string) => {
  return axios.post(`https://spacey-server-two.vercel.app/subscribe`, email);
};
