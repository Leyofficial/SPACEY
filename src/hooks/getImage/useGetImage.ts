import {useEffect, useState} from "react";
import {getImageFromServer} from "../../ApiRequests/uploads/getImage.ts";

interface IUserGetImage{
    image:string | null,
    isLoading:boolean
}
export const useGetImage = (id:string):IUserGetImage  => {
    const [image, setImage] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if(id){
            setIsLoading(true)
            getImageFromServer(id, setImage,setIsLoading)
        }
    },[id])
    return {image,isLoading}


}