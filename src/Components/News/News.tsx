import style from './News.module.scss'
import NewsItem from "./NewsItem/NewsItem.tsx";
import {useEffect, useState} from "react";
import {getNews} from "../../ApiRequests/Items/newsItems.ts";

interface IReviews{
    dateOfReview:string,
    review:string,
    reviewAuthor:string,
    _id:string

}

export interface INews {
    author:string,
    date:string,
    description:string,
    image:string,
    reviews:IReviews[],
    subtitle:string,
    title:string,
    _id:string



}
const News = () => {
const [news,setNews] = useState<INews[] | null>(null)
    useEffect(() => {
        getNews().then(res => setNews(res?.news))
    }, [])


    return (
        <div className={style.container}>
            <h1>Latest News</h1>
            <div className={style.wrapper}>
                {news && news.map((item,index) => <NewsItem key={index} item={item}></NewsItem>) }
            </div>
        </div>
    );
};

export default News;