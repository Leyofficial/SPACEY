import style from './HeaderPage.module.scss'
import Addvertation from "./Addvertation/Addvertation.tsx";
function HeaderPage() {
    return (
        <div className={style.container}>
            <div className={style.addvertation}>
                <Addvertation/>
            </div>
        </div>
    )
}
export default HeaderPage