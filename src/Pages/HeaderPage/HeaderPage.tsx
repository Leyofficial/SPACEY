import style from './HeaderPage.module.scss'
import Addvertation from "./Addvertation/Addvertation.tsx";
import React from "react";
import {BsBoxSeam} from "react-icons/bs";
import {CiCreditCard1, CiTrophy} from "react-icons/ci";
import {PiHeadphonesThin} from "react-icons/pi";
import HeaderSubtitle from "./HeaderSubtitle/HeaderSubtitle.tsx";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts.tsx";
import Introducing from "../../Components/Introducing/Introducing.tsx";

export interface IData {
    title: string,
    subtitle: string,
    img: React.ReactNode
}

function HeaderPage() {
    const data: IData[] = [
        {
            title: 'Fasted Delivery',
            subtitle: 'Delivery in 24/H',
            img: <BsBoxSeam size={40}/>
        },
        {
            title: '24 Hours Return',
            subtitle: '100% money-back guarantee',
            img: <CiTrophy size={40}/>
        },
        {
            title: 'Secure Payment',
            subtitle: 'Your money is safe',
            img: <CiCreditCard1 size={40}/>
        },
        {
            title: 'Support 24/7',
            subtitle: 'Live contact/message',
            img: <PiHeadphonesThin size={40}/>
        }
    ]
    return (
        <div className={style.container}>
            <div className={style.addvertation}>
                <div>
                    <Addvertation/>
                </div>
                <div className={style.subtitleBlock}>
                    {data.map((item : IData , index) =>
                        <HeaderSubtitle key={index} subtitle={item.subtitle} title={item.title} img={item.img}/>
                    )}
                </div>
            </div>
            <FeaturedProducts></FeaturedProducts>
            <Introducing></Introducing>
        </div>
    )
}

export default HeaderPage