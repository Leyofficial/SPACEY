import style from './Addvertation.module.scss'
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import BigAdd from "./BigAdd/BigAdd.tsx";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {CircularProgress} from "@mui/material";
import {SpinnerLoading} from "../../../Utility/Loading/SpinnerLoading.tsx";
import SmallAdd from "./SmallAdd/SmallAdd.tsx";

interface IGetItems {
    data: {
        categories: []
    }
}

function Addvertation() {
    const [items, setItems] = useState([]);
    const {isLoading, error, data} = useQuery('repoData', () =>
        fetch('https://spacey-server-1qkt.vercel.app').then(res =>
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
            {isLoading ? <SpinnerLoading/> : null}
            {items.length > 0 &&
                <div className={style.blockWrapper}>
                    <div className={style.leftBlock}>
                        <Swiper spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 7500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className={style.mySwiper}
                        >

                            <SwiperSlide><BigAdd item={items[0]}/></SwiperSlide>
                            <SwiperSlide><BigAdd item={items[22]}/></SwiperSlide>
                        </Swiper>
                    </div>
                            <SmallAdd item={items[40]}/>
                    <SmallAdd item={items[40]}/>
                </div>
            }

        </div>
    )
}

export default Addvertation