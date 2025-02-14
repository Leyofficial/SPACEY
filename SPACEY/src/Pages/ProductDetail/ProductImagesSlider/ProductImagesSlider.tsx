import style from './ProductImagesSlider.module.scss'
import {useGetImage} from "../../../hooks/getImage/useGetImage.ts";
import {Skeleton} from "@mui/material";
import SliderItems from "./SliderItems/SliderItems.tsx";
import {useEffect, useState} from "react";
import {IProductImagesSliderProps} from "../productDetail.ts";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const ProductImagesSlider = ({images}: IProductImagesSliderProps) => {
    const [indexOfMainImage, setIndexOfMainImage] = useState<number>(0)
    const {image, isLoading} = useGetImage(images?.restImages[0].images[indexOfMainImage])
    const [startColor] = useState<string>(images?.restImages[0]?.color)
    // const [currentColorImages, setCurrentColorImages] = useState<string[] | null>(null)

    useEffect(() => {
        images?.restImages.map(item => {
            if (item.color === startColor) {
                // setCurrentColorImages(item.images)
            }
        })
    }, [images])

    const changeIndexOfImage = (index : number) => {
        setIndexOfMainImage(index)
    }
    return (
        <div className={style.slider}>
            <section className={style.wrapperImage}>
                {isLoading || !image ? <Skeleton width={200} height={200}></Skeleton> :
                    <img src={image ? image : ""} alt={'product'}/>}
            </section>
            <section className={style.sliderItems}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className={style.items}
                >
                    {images?.restImages[0].images.map((item, index) => <SwiperSlide style={{maxWidth:"22%",color:'red'}}> <SliderItems index={index} callback={changeIndexOfImage} key={index}
                                                                                                  imageId={item}></SliderItems>
                    </SwiperSlide>)}

                </Swiper>

            </section>
            <section className={style.arrows}>
            </section>
        </div>
    );
};

export default ProductImagesSlider;