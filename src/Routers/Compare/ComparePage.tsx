import style from './ComparePage.module.scss'
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import Compare from "../../Pages/ComparePage/Compare.tsx";
function ComparePage() {
    return (
        <>
            <div className={style.bread}>
                <BreadCrumb/>
            </div>
            <div className={style.block}>
                <div className={style.blockWrapper}>
                    <Compare/>
                </div>
            </div>
        </>
    )
}
export default ComparePage
