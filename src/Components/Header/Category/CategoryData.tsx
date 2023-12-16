import {CiLocationOn} from "react-icons/ci";
import { PiHeadphonesLight} from "react-icons/pi";
import {AiOutlineInfoCircle} from "react-icons/ai";
import React from "react";
import {LuLayoutDashboard} from "react-icons/lu";

interface ICategory {
    path: string,
    icon: React.ReactNode,
    title: string
}

export const CategoryData: ICategory[] = [
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
    }
]