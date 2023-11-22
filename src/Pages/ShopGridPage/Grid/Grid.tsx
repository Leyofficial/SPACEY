import style from './Grid.module.scss'
import {ICategory} from "../../../types.ts";
import SmallDealItem from "../../MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getAllItems} from "../../../ApiRequests/Items/Items.ts";
import SmallDealSkeleton from "../../MainPage/Deals/SmallDeal/SmallDealSkeleton.tsx";
import {shuffleArray} from "../../../Utility/shufflerArray/shufllerArray.ts";
import {CustomSearch} from "../../../Utility/CustomSearch/CustomSearch.tsx";
function Grid() {
    const itemsOnScreen = 24
    const [items, setItems] = useState<ICategory[] | null>(null);
    const [valueInput , setValueInput] = useState<string>('')
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
    return (
        <div className={style.block}>
            <CustomSearch  placeholder={'Search for anything...'} callback={setValueInput}/>
            <div className={style.items}>
                {shuffledArray ? shuffledArray?.map((item: ICategory, index: number) => <SmallDealItem
                    key={index}
                    item={item}></SmallDealItem>) : Skeleton()}
            </div>
        </div>
    )
}

export default Grid