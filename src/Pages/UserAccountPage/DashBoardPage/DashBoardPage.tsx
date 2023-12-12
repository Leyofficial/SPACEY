import style from './DashBoardPage.module.scss'
// import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/hooks.ts";
import FormInfo from "./FormInfo/FormInfo.tsx";
import {Avatar, Skeleton} from "@mui/material";

function DashBoardPage() {
    const {user} = useAppSelector((state) => state.user);
    console.log(user)
    return (
        user ?
            <div className={style.container}>
                <div className={style.headerBlock}>
                    <h2 className={style.title}>Hello , {user.givenName}</h2>
                    <p className={style.guideText}>
                        From your account dashboard. you can easily check & view your <span>Recent Orders</span>, manage
                        your <span>Shipping and Billing Addresses</span> and edit your <span>Password</span> and <span>Account Details.</span>
                    </p>
                </div>
                <div className={style.tablesInfo}>
                    <FormInfo text={'Account Info'}>
                        <div className={style.avatarBlock}>
                            <div className={style.avatar}>
                                {user.picture ? <Avatar alt="Remy Sharp" src={user?.picture}/> : <Avatar/>}
                            </div>
                            <div className={style.avatarText}>
                                <h2>{user.familyName && user.givenName ?  user.givenName + ' ' + user.familyName : <Skeleton variant={'rounded'} width={'7rem'} height={15}/>}</h2>
                                <p>{user.locale || 'unknown'}</p>
                                {/*place*/}
                            </div>
                        </div>
                        <div className={style.otherContacts}>
                            <div className={style.item}>
                                <p>Email : </p>{user.email ? <span>{user.email}</span> : <Skeleton variant={'rounded'} width={'10rem'}/>}
                            </div>
                        </div>
                    </FormInfo>
                </div>
            </div> : null
    )
}

export default DashBoardPage