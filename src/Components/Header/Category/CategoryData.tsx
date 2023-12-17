import {CiLocationOn} from "react-icons/ci";
import { PiHeadphonesLight} from "react-icons/pi";
import {AiOutlineInfoCircle} from "react-icons/ai";
import React from "react";
import {LuLayoutDashboard} from "react-icons/lu";
import {MdOutlineContactSupport} from "react-icons/md";
import {BsGrid3X3Gap} from "react-icons/bs";

interface ICategory {
    path: string,
    icon: React.ReactNode,
    title: string
}

export const CategoryData: ICategory[] = [
    {
        path : 'shop-grid',
        icon : <BsGrid3X3Gap color={'#5F6C72'}/>,
        title : 'All'
    },
    {
        path: 'track-order',
        icon: <CiLocationOn color={'#5F6C72'}/>,
        title: 'Track Order'
    },
    {
        path: '/user-account/dashboard',
        icon: <LuLayoutDashboard  color={'#5F6C72'}/>,
        title: 'Dashboard'
    },
    {
        path: 'support',
        icon: <PiHeadphonesLight color={'#5F6C72'}/>,
        title: 'Customer Support'
    },
    {
        path: 'help',
        icon: <AiOutlineInfoCircle color={'#5F6C72'}/>,
        title: 'Need Help'
    },
    {
        path : 'faq',
        icon :  <MdOutlineContactSupport color={'#5F6C72'}/>,
        title : 'FAQ'
    },
]