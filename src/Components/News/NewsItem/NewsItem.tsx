import style from './NewsItem.module.scss'
import {INews} from "../News.tsx";
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../ApiRequests/uploads/getImage.ts";
import { FaUserTie } from "react-icons/fa6";
import {LiaCommentDots} from "react-icons/lia";
import {BsFillCalendarDateFill} from "react-icons/bs";
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn.tsx";

interface INewsItemProps {
    item: INews
}

const NewsItem = ({item}: INewsItemProps) => {
    const [image, setImage] = useState<string | null>(null)

    useEffect(() => {
        getImageFromServer(item.image, setImage)
    }, [item])


    const date = new Date(item?.date)
    const options:Intl.DateTimeFormatOptions = {day: 'numeric', month: 'short', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-US', options)


    return (
        <div className={style.item}>

            <img src={image ? image : ""} alt={'news'}/>
            <div className={style.aboutNews}>
                <p className={style.author}><FaUserTie color={'orange'}></FaUserTie>{item.author}</p>
                <p className={style.date}><BsFillCalendarDateFill  color={'orange'} />{formattedDate}</p>
                <p className={style.numeric}><LiaCommentDots color={'orange'} />{item.reviews.length}</p>
            </div>
            <div className={style.info}>
                <h3>{item.title}</h3>
                <p className={style.description}>{item.description}</p>
            </div>
            <div className={style.btn}>
                <CustomBtn text={'READ MORE'}></CustomBtn>
            </div>

        </div>
    );
};

export default NewsItem;