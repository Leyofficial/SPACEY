import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import style from './MyDropzone.module.scss'
import {saveAvatar, setAvatar} from "../../ApiRequests/uploads/setAvatar.ts";
import {Toaster} from "react-hot-toast";
import {errorToaster} from "../ToasterActions/ErrorToaster.tsx";
import {Skeleton} from "@mui/material";
import {IUser} from "../../redux/user/reducers/UserSlice.ts";

interface IMyDropzone {
    image: string | null,
    user: IUser,
    isLoading: boolean

}

const MyDropzone = ({image, user, isLoading}:IMyDropzone) => {

    const [activeDropImage, setActiveDropImage] = useState(null)
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => errorToaster('file reading was aborted')
            reader.onerror = () => errorToaster('file reading has failed')
            reader.onload = () => {
                setActiveDropImage(file)
                const data = new FormData()
                data.append('file', file)
                setAvatar(data).then(res => {
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

                {isLoading ? <Skeleton width={200} height={200} style={{borderRadius: '50%'}}/> :
                    <img alt={'avatar'} src={!activeDropImage ? image : URL.createObjectURL(activeDropImage)}/>}
                <input className={style.dropzone} {...getInputProps()} />
                <p className={style.title}>Drag 'n' drop or click</p>
            </div>
        </>

    )
}
export default MyDropzone;