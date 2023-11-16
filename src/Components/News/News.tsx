import style from './News.module.scss'
import NewsItem from "./NewsItem/NewsItem.tsx";
import {useEffect, useState} from "react";
import {getNews} from "../../ApiRequests/Items/newsItems.ts";
import {INews} from "./newsTypes.ts";


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