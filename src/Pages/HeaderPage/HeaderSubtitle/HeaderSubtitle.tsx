import style from './HeaderSubtitle.module.scss'
import {IData} from "../HeaderPage.tsx";
function HeaderSubtitle({img , title , subtitle} : IData) {
    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                {img}
            </div>
            <div className={style.textBlock}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}

export default HeaderSubtitle