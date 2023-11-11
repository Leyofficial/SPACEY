import style from './HeaderPage.module.scss'
import Addvertation from "./Addvertation/Addvertation.tsx";
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../ApiRequests/uploads/getImage.ts";
function HeaderPage() {
    const [image,setImage] = useState<string | null>(null)
    useEffect(() => {
        getImageFromServer("654c90e4cdcdc15c70ff4eb8",setImage)
    },[])

    console.log(image)
    return (
        <div className={style.container}>
            <div className={style.addvertation}>
                <Addvertation/>
            </div>
        </div>
    )
}
export default HeaderPage