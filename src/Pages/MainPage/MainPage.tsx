import style from './MainPage.module.scss'
import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";
import DealItem from "./Deals/SmallDealItem.tsx";
import {useEffect, useState} from "react";
import {IBigDeal, ISmallDeal} from "./types.ts";
import {SpinnerLoading} from "../../Utility/Loading/SpinnerLoading.tsx";
import {Skeleton} from "@mui/material";

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
                    </> : <div className={style.skeleton}>
                        <Skeleton variant="rounded" width={234} height={320} />
                        <Skeleton variant="rounded" width={234} height={320} />
                        <Skeleton variant="rounded" width={234} height={320} />
                        <Skeleton variant="rounded" width={234} height={320} />
                        <Skeleton variant="rounded" width={234} height={320} />
                        <Skeleton variant="rounded" width={234} height={320} />
                        <Skeleton variant="rounded" width={234} height={320} />
                        <Skeleton variant="rounded" width={234} height={320} />
                    </div> }

                </div>
            </div>
        </div>
    )
}

export default MainPage