import style from './MainPage.module.scss'
import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";
import DealItem from "./Deals/SmallDeal/SmallDealItem.tsx";
import {useEffect, useState} from "react";
import {IBigDeal} from "./types.ts";
import BigDealItem from "./Deals/BigDeal/BigDealItem.tsx";
import BigDealSkeleton from "./Deals/BigDeal/BigDealSkeleton.tsx";
import SmallDealSkeleton from "./Deals/SmallDeal/SmallDealSkeleton.tsx";
import Slider from "react-slick";
import {shuffleArray} from "../../Utility/shufflerArray/shufllerArray.ts";
import ProductCarouselItem from "../../Utility/Carousel/Carousel.tsx";

function MainPage() {
    const {isLoading, data} = UseCustomQuery("https://spacey-server.vercel.app/api");
    const [filteredCategories, setFiltered] = useState([]);
    const numSkeleton = useState(8)[0];

    function Skeleton() {
        return (
            <>
                {Array(numSkeleton).fill(null).map(() => <SmallDealSkeleton/>)}
            </>
        )
    }

    useEffect(() => {
        const filteredSale = data?.categories.filter((item: IBigDeal) => item.product.sale);
        if (filteredSale) {
            setFiltered(shuffleArray(filteredSale).slice(0 , 8))
        }

    }, [data])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };


    return (
        <div className={style.container}>
            <div className={style.textBlock}>
                <h1 className={style.title}>Best Deals</h1>
            </div>
            <div className={style.block}>
                <div className={style.leftBlock}>
                    {!isLoading && filteredCategories ? <BigDealItem item={filteredCategories[0]}/> : <BigDealSkeleton/> }

                </div>
                <div className={style.itemsBlock}>
                    {!isLoading && filteredCategories.length > 0 ? <>
                            {filteredCategories.map((item) =>
                                <DealItem item={item}/>
                            )}
                    </> : <>
                    {Skeleton()}
                    </>}
                </div>
            </div>
            <div className={style.carousel}>
                <p className={style.title}>Shop with Categories</p>
                <Slider className={style.carouselItems} {...settings}>
                    <div>
                        < ProductCarouselItem item={filteredCategories[0]}/>
                    </div>
                    <div>
                        < ProductCarouselItem item={filteredCategories[25]}/>
                    </div>
                    <div>
                        < ProductCarouselItem item={filteredCategories[84]}/>
                    </div>
                </Slider>

            </div>
        </div>
    )
}

export default MainPage