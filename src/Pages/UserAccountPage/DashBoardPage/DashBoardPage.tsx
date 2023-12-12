import style from './DashBoardPage.module.scss'
import {useAppSelector} from "../../../redux/hooks/hooks.ts";
import FormInfo from "./FormInfo/FormInfo.tsx";
import {Avatar, Skeleton} from "@mui/material";
import {IOrderInfo, OrderInfo} from "./OrderInfo/OrderInfo.tsx";
import {MdOutlineRocket} from "react-icons/md";
import {PiReceiptDuotone} from "react-icons/pi";
import {BiPackage} from "react-icons/bi";

function DashBoardPage() {
    const {user} = useAppSelector((state) => state.user);
    const orderInfo : IOrderInfo[] = [
        {
            text : 'Total Orders',
            background : '#EAF6FE',
            icon : <MdOutlineRocket  size={'2rem'} color={'#2DA5F3'}/>,
            numberOfOrders : 154
        } ,
        {
            text : 'Pending Orders',
            background : '#FFF3EB',
            icon : <PiReceiptDuotone  size={'2rem'} color={'#FA8232'}/>,
            numberOfOrders : 5
        },
        {
            text : 'Completed Orders',
            background : '#EAF7E9',
            icon : <BiPackage   size={'2rem'} color={'#2DB324'}/>,
            numberOfOrders : 51
        }
    ]
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
                            </div>
                        </div>
                        <div className={style.otherContacts}>
                            <div className={style.item}>
                                <p>Email</p> : {user.email ? <span>{user.email}</span> : <Skeleton variant={'rounded'} width={'10rem'}/>}
                            </div>
                        </div>
                    </FormInfo>
                    <FormInfo text={'Billing address'}>
                        <div className={style.billingAddress}>
                            <p className={style.name}>{user.givenName} {user.familyName}</p>
                            <p className={style.billingText}>East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh</p>
                        </div>
                    </FormInfo>
                    <div className={style.statsOrders}>
                        {orderInfo.map((item : IOrderInfo) =>
                        <OrderInfo background={item.background} numberOfOrders={item.numberOfOrders} icon={item.icon} text={item.text}/>
                        )}
                    </div>

                </div>
            </div> : null
    )
}

export default DashBoardPage