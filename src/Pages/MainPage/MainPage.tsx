import style from './MainPage.module.scss'
import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";
import DealItem from "./Deals/SmallDeal/SmallDealItem.tsx";
import {useEffect, useState} from "react";
import {IBigDeal} from "./types.ts";
import BigDealItem from "./Deals/BigDeal/BigDealItem.tsx";
import BigDealSkeleton from "./Deals/BigDeal/BigDealSkeleton.tsx";
import SmallDealSkeleton from "./Deals/SmallDeal/SmallDealSkeleton.tsx";

function MainPage() {
    const {isLoading, data} = UseCustomQuery("https://spacey-server.vercel.app/api");
    const [filteredCategories, setFiltered] = useState([])
    useEffect(() => {
        const filteredSale = data?.categories.filter((item: IBigDeal) => item.product.sale);
        setFiltered(filteredSale)
    }, [data])

    return (
        <div className={style.container}>
            <div className={style.textBlock}>
                <h1 className={style.title}>Best Deals</h1>
            </div>
            <div className={style.block}>
                <div className={style.leftBlock}>
                    {!isLoading && filteredCategories ? <BigDealItem item={filteredCategories[28]}/> : <BigDealSkeleton/> }

                </div>
                <div className={style.itemsBlock}>
                    {!isLoading && filteredCategories ? <>
                        <DealItem item={filteredCategories[12]}/>
                        <DealItem item={filteredCategories[1]}/>
                        <DealItem item={filteredCategories[14]}/>
                        <DealItem item={filteredCategories[72]}/>
                        <DealItem item={filteredCategories[48]}/>
                        <DealItem item={filteredCategories[22]}/>
                        <DealItem item={filteredCategories[82]}/>
                        <DealItem item={filteredCategories[39]}/>
                    </> : <>
                        <SmallDealSkeleton/>
                        <SmallDealSkeleton/>
                        <SmallDealSkeleton/>
                        <SmallDealSkeleton/>
                        <SmallDealSkeleton/>
                        <SmallDealSkeleton/>
                        <SmallDealSkeleton/>
                     <SmallDealSkeleton/> </>}

                </div>
            </div>
        </div>
    )
}

export default MainPage