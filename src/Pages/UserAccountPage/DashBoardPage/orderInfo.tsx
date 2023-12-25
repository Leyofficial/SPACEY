import {IOrderInfo} from "./dashboardTypes.ts";
import {MdOutlineRocket} from "react-icons/md";
import {PiReceiptDuotone} from "react-icons/pi";
import {BiPackage} from "react-icons/bi";

export const orderInfo : IOrderInfo[] = [
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