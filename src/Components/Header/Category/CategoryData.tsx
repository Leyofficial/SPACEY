import {CiLocationOn} from "react-icons/ci";
import {PiArrowsCounterClockwiseFill, PiHeadphonesLight} from "react-icons/pi";
import {AiOutlineInfoCircle} from "react-icons/ai";
import React from "react";

interface ICategory {
    path: string,
    icon: React.ReactNode,
    title: string
}

export const CategoryData: ICategory[] = [
    {
        path: 'order',
        icon: <CiLocationOn color={'#5F6C72'}/>,
        title: 'Track Order'
    },
    {
        path: 'compare',
        icon: <PiArrowsCounterClockwiseFill color={'#5F6C72'}/>,
        title: 'Compare'
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