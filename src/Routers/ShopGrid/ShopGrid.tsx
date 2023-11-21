import style from './ShopGrid.module.scss'
import {useParams} from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import Filter from "../../Pages/ShopGridPage/Filter/Filter.tsx";
import SmallDealItem from "../../Pages/MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import {useEffect, useState} from "react";
import {getAllItems} from "../../ApiRequests/Items/Items.ts";
import {ICategory} from "../../types.ts";
import {shuffleArray} from "../../Utility/shufflerArray/shufllerArray.ts";
import SmallDealSkeleton from "../../Pages/MainPage/Deals/SmallDeal/SmallDealSkeleton.tsx";

function ShopGrid() {
    const itemsOnScreen = 24
    const [items, setItems] = useState<ICategory[] | null>(null);
    const [shuffledArray, setShuffledArray] = useState<ICategory[] | null>(null)
    const params = useParams()
    useEffect(() => {
        // if (params.category) {
        getAllItems().then(res => setItems(res.data.categories))
        // }
    }, [params]);
    function Skeleton() {
        return (
            <div className={style.skeletonBlock}>
                {Array(itemsOnScreen).fill(null).map(() => <SmallDealSkeleton/>)}
            </div>
        )
    }
    useEffect(() => {
        if (items)
            setShuffledArray(shuffleArray(items).slice(0, itemsOnScreen))
    }, [items])
    // const [categoriesItems, setCategoriesItems] = useState([]);
    return (
        <>
            <header className={style.header}>
                <div className={style.wrapper}>
                    <div className={style.breadCrumb}>
                        <BreadCrumb/>
                    </div>
                </div>
            </header>
            <div className={style.block}>
                <div className={style.blockWrapper}>
                    <main className={style.filters}>
                        <Filter/>
                    </main>
                    <section className={style.itemsBlock}>
                        {shuffledArray ? shuffledArray?.map((item: ICategory, index: number) => <SmallDealItem
                            key={index}
                            item={item}></SmallDealItem>) : Skeleton()}
                    </section>
                </div>
            </div>
        </>
    )
}

export default ShopGrid