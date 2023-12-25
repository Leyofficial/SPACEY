import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import style from './MyDropzone.module.scss'
import {saveAvatar, setAvatar} from "../../ApiRequests/uploads/setAvatar.ts";
import {Toaster} from "react-hot-toast";
import {errorToaster} from "../ToasterActions/ErrorToaster.tsx";
import {Avatar, Skeleton} from "@mui/material";
import {IUser} from "../../redux/user/reducers/UserSlice.ts";

interface IMyDropzone {
    image: string | null,
    user: IUser,
    isLoading: boolean

}

const MyDropzone = ({image, user, isLoading}:IMyDropzone) => {
    const [activeDropImage, setActiveDropImage] = useState<any>(null)
    const onDrop = useCallback((acceptedFiles : File[]) => {
        acceptedFiles.forEach((file : File | string | null | any) => {
            const reader = new FileReader()

            reader.onabort = () => errorToaster('file reading was aborted')
            reader.onerror = () => errorToaster('file reading has failed')
            reader.onload = () => {
                setActiveDropImage(file)
                const data = new FormData()
                data.append('file', file)
                setAvatar(data).then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        saveAvatar(res.data.file.id, user?._id).then(res => console.log(res)).catch(err => console.log(err))
                    }
                })
            }
            reader.readAsArrayBuffer(file)

        })

    }, [])

    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div {...getRootProps()}>

                {isLoading ? <Skeleton width={204} height={204} variant="circular"/> :
                    !image ? <Avatar sx={{ width: 204, height: 204 }}/> :
                    <img alt={'avatar'} src={!activeDropImage ? image : URL.createObjectURL(activeDropImage)}/>}
                <input className={style.dropzone} {...getInputProps()} />
                <p className={style.title}>Drag 'n' drop or click</p>
            </div>
        </>

    )
}
export default MyDropzone;