import axios from "axios";

export const setAvatar = (data: FormData) => {
    return axios.post(`https://spacey-server.vercel.app/uploads`,data,{
        headers:{
            'content-type':'multipart/form-data'
        }
    })
}
export const saveAvatar = (idAvatar:string,idUser:string) => {
    return axios.patch(`https://spacey-server.vercel.app/auth/user/edit/${idUser}`,{newPicture:idAvatar})
}