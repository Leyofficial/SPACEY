import style from './HeaderPage.module.scss'
import Addvertation from "./Addvertation/Addvertation.tsx";
import React, {useEffect, useState} from "react";
import {getImageFromServer} from "../../ApiRequests/uploads/getImage.ts";
import {BsBoxSeam} from "react-icons/bs";
import {CiCreditCard1, CiTrophy} from "react-icons/ci";
import {PiHeadphonesThin} from "react-icons/pi";
import HeaderSubtitle from "./HeaderSubtitle/HeaderSubtitle.tsx";

export interface IData {
    title: string,
    subtitle: string,
    img: React.ReactNode
}

function HeaderPage() {
    const [image, setImage] = useState<string | null>(null)

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
                <Addvertation/>
                <div className={style.subtitleBlock}>
                    {data.map((item) =>
                        <HeaderSubtitle subtitle={item.subtitle} title={item.title} img={item.img}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderPage