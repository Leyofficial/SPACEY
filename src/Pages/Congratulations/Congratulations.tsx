import style from './Congratulations.module.scss'
import {IoCheckmarkDoneCircle} from "react-icons/io5";
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
function Congratulations() {
    return (
        <div className={style.block}>
            <div className={style.topBLock}>
                <div className={style.icon}>
                    <IoCheckmarkDoneCircle fontSize={'5rem'}/>
                </div>
                <div className={style.text}>
                    SUCCESS
                </div>
            </div>
            <div className={style.footerBlock}>
               <p className={style.footerText}>Congratulations, your account has been successfully created.</p>
                <div className={style.btn}><CustomBtn blockWidth={'60%'} path={'/'} text={'Join'}/></div>
            </div>

        </div>
    )
}
export default Congratulations