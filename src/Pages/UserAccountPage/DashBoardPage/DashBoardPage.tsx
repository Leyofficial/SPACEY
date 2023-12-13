import style from './DashBoardPage.module.scss'
import {useAppSelector} from "../../../redux/hooks/hooks.ts";
import FormInfo from "./FormInfo/FormInfo.tsx";
import {Avatar, Skeleton} from "@mui/material";
import {IOrderInfo, OrderInfo} from "./OrderInfo/OrderInfo.tsx";
import {MdOutlineRocket} from "react-icons/md";
import {PiReceiptDuotone} from "react-icons/pi";
import {BiPackage} from "react-icons/bi";
import CustomizedTables, {ICustomTable} from "./CustomTable/CustomTable.tsx";
import {ICategory} from "../../../types.ts";
import SmallDealItem from "../../MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import {useEffect, useState} from "react";
import {getAllItems} from "../../../ApiRequests/Items/Items.ts";
import {CustomPagination} from "../../../Utility/Pagination/CustomPagination.tsx";

const ITEMS_ON_SCREEN = 4;

function DashBoardPage() {

    const [items , setItems] = useState([]);

    const [page, setPage] = useState<number>(1);
    const [ currentProducts ,  setCurrentProducts] = useState([]);
    const indexOfLastCourse = page * ITEMS_ON_SCREEN;
    const indexOfFirstCourse = indexOfLastCourse - ITEMS_ON_SCREEN;
    const {user} = useAppSelector((state) => state.user);
    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    const orderInfo: IOrderInfo[] = [
        {
            text: 'Total Orders',
            background: '#EAF6FE',
            icon: <MdOutlineRocket size={'2rem'} color={'#2DA5F3'}/>,
            numberOfOrders: 154
        },
        {
            text: 'Pending Orders',
            background: '#FFF3EB',
            icon: <PiReceiptDuotone size={'2rem'} color={'#FA8232'}/>,
            numberOfOrders: 5
        },
        {
            text: 'Completed Orders',
            background: '#EAF7E9',
            icon: <BiPackage size={'2rem'} color={'#2DB324'}/>,
            numberOfOrders: 51
        }
    ]
    const tableInfo: ICustomTable[] = [
        {
            orderId: '#96459765',
            status: 'In progress',
            date: 'Dec 30, 2019 05:18',
            total: '$1,500 (10 Products)',
            pathForLink: '/'
        }
    ]

    useEffect(() => {
        getAllItems().then((res) => {
            setItems(res.data.categories);
        })
    },[])


    useEffect(() => {
        const currentProducts  = items.slice(indexOfFirstCourse, indexOfLastCourse);
        setCurrentProducts(currentProducts);
    }, [items , page]);

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
                                <h2>{user.givenName ? user.givenName + ' ' + user.familyName :
                                    <Skeleton variant={'rounded'} width={'7rem'} height={15}/>}</h2>
                                <p>{user.locale || 'unknown'}</p>
                            </div>
                        </div>
                        <div className={style.otherContacts}>
                            <div className={style.item}>
                                <p>Email</p> : {user.email ? <span>{user.email}</span> :
                                <Skeleton variant={'rounded'} width={'10rem'}/>}
                            </div>
                            <div className={style.item}>
                                <p>Phone</p> : {!user ? <span>{user}</span> : <span>unknown</span>}
                            </div>
                        </div>
                    </FormInfo>
                    <FormInfo text={'Billing address'}>
                        <div className={style.billingAddress}>
                            <p className={style.name}>{user.givenName} {user.familyName}</p>
                            <p className={style.billingText}>East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                                1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh</p>
                        </div>
                    </FormInfo>
                    <div className={style.statsOrders}>
                        {orderInfo.map((item: IOrderInfo) =>
                            <OrderInfo background={item.background} numberOfOrders={item.numberOfOrders}
                                       icon={item.icon} text={item.text}/>
                        )}
                    </div>
                </div>
                <div className={style.tableBlock}>
                    <h2 className={style.tableTitle}>Recent Order</h2>
                    <div className={style.table}>
                        <CustomizedTables array={tableInfo}/>
                    </div>
                </div>
                <div className={style.historyBlock}>
                    <h2 className={style.historyTitle}>
                        Browsing history
                    </h2>
                    <div className={style.historyItems}>
                        {
                            currentProducts?.map((item: ICategory, index: number) => (
                                <SmallDealItem
                                    key={index}
                                    item={item}
                                ></SmallDealItem>
                            ))
                        }
                    </div>
                    <section className={style.pagination}>
                    <CustomPagination
                        callback={handleChange}
                        page={page}
                        count={Math.round((items.length + 1) / ITEMS_ON_SCREEN)}
                    />
                </section>

                </div>

            </div> : null
    )
}

export default DashBoardPage