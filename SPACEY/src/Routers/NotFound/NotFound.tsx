import style from './NotFound.module.scss'
import notFound from './../../assets/img/404(1).jpg'
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import {useNavigate} from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                <img src={notFound} alt="not found"/>
            </div>
            <div className={style.textBlock}>
                <h2 className={style.title}>404, Page not founds</h2>
                <p className={style.subtitle}>Something went wrong. It’s look that your requested could not be found.
                    It’s look like the link is broken or the page is removed.</p>
            </div>
            <div className={style.buttons}>
                <CustomBtn arrowLeft={true} callback={navigate(-1)} text={'Go back'}/>
            </div>
        </div>
    )
}

export default NotFound