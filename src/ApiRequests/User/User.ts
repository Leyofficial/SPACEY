import axios from "axios";
import {IUserState} from "../../redux/user/reducers/UserSlice.ts";

export const editUser = (data:IUserState) => {
    return axios.post(`https://spacey-server.vercel.app/auth/user/edit/${data.user._id}`,data.user)
}