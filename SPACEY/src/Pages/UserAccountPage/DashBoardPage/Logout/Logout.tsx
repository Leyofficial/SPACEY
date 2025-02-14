import style from './Logout.module.scss';
import {IoExitOutline} from "react-icons/io5";
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../redux/hooks/hooks.ts";
import {logoutUser} from "../../../../redux/user/reducers/UserSlice.ts";
import {successToaster} from "../../../../Utility/ToasterActions/SuccessToaster.tsx";
import {Toaster} from "react-hot-toast";
interface ILogout {
    callback : (a : boolean) => void
}

function Logout({callback} : ILogout) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function cameback() {
        navigate(-1)
    }
    function handleClickLogout () {
        dispatch(logoutUser());
        successToaster('See you soon!');
        setTimeout(() => {
            localStorage.setItem('token' , '');
            navigate('/')
            callback(false)
        },2000)
    }
    return (
        <div className={style.block}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className={style.topBlock}>
                <IoExitOutline fontSize={'4rem'}/>
            </div>
            <div className={style.wrapperBlock}>
                <div className={style.textBlock}>
                    <p className={style.title}>Are you sure you want to log out of your account?</p>
                </div>
                <div className={style.buttons}>
                    <div>

                        <CustomBtn callback={() => cameback()} text={'GO BACK'} arrowLeft={true}/>
                    </div>
                    <button onClick={() => handleClickLogout()} className={style.logoutBtn}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Logout