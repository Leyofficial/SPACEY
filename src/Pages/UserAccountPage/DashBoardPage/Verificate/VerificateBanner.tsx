import style from './VerificateBanner.module.scss'
import {useEffect, useState} from "react";
import {useAppSelector} from "../../../../redux/hooks/hooks.ts";
import {NavLink} from "react-router-dom";
import {MdCancel} from "react-icons/md";

function VerificateBanner() {
    const [isClicked, setClicked] = useState<boolean>(false)
    const {user} = useAppSelector((state) => state.user);
    const [isAllowed , setAllowed] = useState<boolean>(false)
    useEffect(() => {
        if (!user.emailVerified) return
        setAllowed(true)
    }, [user]);
    return (
        !isAllowed &&  !isClicked ?  <div className={style.block}>
        <div className={style.wrapperBlock}>
            <div className={style.textBlock}>
                <h2 className={style.title}>
                    Your email has not been verified, to get it click <NavLink to={'/user-account'}>here.</NavLink>
                </h2>
            </div>
            <div onClick={() => setClicked(true)} className={style.btn}>
                <MdCancel fontSize={'1.5rem'}/>
            </div>
        </div>
    </div> : null
    )
}

export default VerificateBanner