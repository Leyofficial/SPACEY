import style from './ProductImagesSlider.module.scss'
import {useGetImage} from "../../../hooks/getImage/useGetImage.ts";
import {Skeleton} from "@mui/material";
import SliderItems from "./SliderItems/SliderItems.tsx";
import {useEffect, useState} from "react";
import {FaArrowLeftLong} from "react-icons/fa6";
import {IProductImagesSliderProps} from "../productDetail.ts";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const ProductImagesSlider = ({images}: IProductImagesSliderProps) => {
    const {image, isLoading} = useGetImage(images?.mainImage)
    const [startColor] = useState<string>(images?.restImages[0]?.color)
    const [currentColorImages,setCurrentColorImages] = useState<string[] | null>(null)

    useEffect(() => {
        images?.restImages.map(item => {

            if(item.color === startColor) {
                setCurrentColorImages(item.images)
            }
        })

    },[images])

// console.log(currentColorImages)
    return (
        <div className={style.slider}>
            <section className={style.wrapperImage}>
                {isLoading || !image ? <Skeleton width={400} height={700}></Skeleton>  : <img src={image ? image : ""} alt={'product'}/>}
            </section>
            <section className={style.sliderItems}>
                {/*<SwiperSlide className={style.items}>*/}
                    {/*<Swiper spaceBetween={100}*/}
                    {/*        centeredSlides={true}*/}
                    {/*        autoplay={{*/}
                    {/*            delay: 7500,*/}
                    {/*            disableOnInteraction: false,*/}
                    {/*        }}*/}
                    {/*        modules={[Autoplay]}*/}
                    {/*        className={style.mySwiper}*/}
                    {/*>*/}
                    {/*    <SwiperSlide>*/}
                    {/*    {images?.restImages[0].images.map((item,index) =>  <SliderItems key={index} imageId={item}></SliderItems> )}*/}
                    {/*    </SwiperSlide>*/}
                    {/*</Swiper>*/}
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className={style.items}
                    >
                        {images?.restImages[0].images.map((item,index) => <SwiperSlide> <SliderItems key={index} imageId={item}></SliderItems> </SwiperSlide>)}

                    </Swiper>

            </section>
            <section className={style.arrows}>
                <FaArrowLeftLong />
                <FaArrowLeftLong style={{rotate:`180deg`}}/>
            </section>
        </div>
    );
};

export default ProductImagesSlider;