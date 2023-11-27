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
import SmallAddSkeleton from "./SmallAdd/SmallAddSkeleton.tsx";

function Addvertation() {
    const [items, setItems] = useState([]);
    const {isLoading,  data} = useQuery('repoData', () =>
        fetch('https://spacey-server.vercel.app/api').then(res =>
            res.json()
        )
    )

    useEffect(() => {
        if (!data) return
        setItems(data.categories)
    }, [data])


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

                        <SwiperSlide> {!isLoading && data ? <BigAdd item={items[0]} idItem={data.categories[0]._id}/>  : <BigAddSkeleton/> } </SwiperSlide>
                        <SwiperSlide> {!isLoading && data ? <BigAdd item={items[22]} idItem={data.categories[22]._id}/> : <BigAddSkeleton/> } </SwiperSlide>
                    </Swiper>
                    <div className={style.rightBlock}>
                        { !isLoading && data ?  <SmallAdd item={items[0]} idItem={data.categories[0]._id}/> :  <SmallAddSkeleton/>}
                        { !isLoading && data ?  <SmallAdd item={items[12]} idItem={data.categories[12]._id}/> :  <SmallAddSkeleton/>}
                    </div>
                </div>
        </div>
    )
}

export default Addvertation