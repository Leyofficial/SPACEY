import style from './Addvertation.module.scss'
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import BigAdd from "./BigAdd/BigAdd.tsx";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SmallAdd from "./SmallAdd/SmallAdd.tsx";
import BigAddSkeleton from "./BigAdd/BigAddSkeleton.tsx";

function Addvertation() {
    const [items, setItems] = useState([]);
    const {isLoading, error, data} = useQuery('repoData', () =>
        fetch('https://spacey-server.vercel.app/api').then(res =>
            res.json()
        )
    )

    useEffect(() => {
        if (!data) return
        setItems(data.categories)
    }, [data])
    // @ts-ignore
    return (
        <div className={style.block}>
                <div className={style.blockWrapper}>
                    <Swiper spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 7500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className={style.mySwiper}
                    >

                        <SwiperSlide> {!isLoading ? <BigAdd item={items[0]}/>  : <BigAddSkeleton/> } </SwiperSlide>
                        <SwiperSlide> {!isLoading ? <BigAdd item={items[22]}/> : <BigAddSkeleton/> } </SwiperSlide>
                    </Swiper>
                    <div className={style.rightBlock}>
                        <SmallAdd item={items[0]}/>
                        <SmallAdd item={items[20]}/>
                    </div>
                </div>
        </div>
    )
}

export default Addvertation