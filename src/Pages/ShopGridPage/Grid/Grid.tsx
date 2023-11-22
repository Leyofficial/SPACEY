import style from './Grid.module.scss'
import {ICategory} from "../../../types.ts";
import SmallDealItem from "../../MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import {useEffect, useState} from "react";
import {getAllItems} from "../../../ApiRequests/Items/Items.ts";
import SmallDealSkeleton from "../../MainPage/Deals/SmallDeal/SmallDealSkeleton.tsx";
import {shuffleArray} from "../../../Utility/shufflerArray/shufllerArray.ts";
import {CustomSearch} from "../../../Utility/CustomSearch/CustomSearch.tsx";
function Grid() {
    const itemsOnScreen = 24
    const [items, setItems] = useState<ICategory[]>([]);
    const [valueInput , setValueInput] = useState<string>('')
    const [shuffledArray, setShuffledArray] = useState<ICategory[] >([]);
    const [foundArrays , setFound] = useState<ICategory[]>([]);

    useEffect(() => {
        getAllItems().then(res => setItems(res.data.categories))
    }, []);
    useEffect(() => {
        if (!valueInput) return
        const foundItem : ICategory[]  =  items.filter((item : ICategory) => item.brand.toLowerCase().includes(valueInput.toLowerCase()));
        setFound(foundItem.slice(0 , itemsOnScreen))
    }, [valueInput]);

    useEffect(() => {
        if (items)
            setShuffledArray(shuffleArray(items).slice(0, itemsOnScreen))
    }, [items])

    useEffect(() => {
        if (valueInput === '') {
            setShuffledArray(shuffleArray(items).slice(0, itemsOnScreen))
        } else {
            setShuffledArray(foundArrays.slice(0 , itemsOnScreen))
        }

    }, [foundArrays]);



    function Skeleton() {
        return (
            <div className={style.skeletonBlock}>
                {Array(itemsOnScreen).fill(null).map(() => <SmallDealSkeleton/>)}
            </div>
        )
    }

    return (
        <div className={style.block}>
            <CustomSearch  placeholder={'Search for brand...'} callback={setValueInput}/>
            <div className={style.items}>
                {shuffledArray.length > 0 ? shuffledArray?.map((item: ICategory, index: number) => <SmallDealItem key={index} item={item}></SmallDealItem>) : Skeleton()}
                {/*{foundArrays.length > 0 ? foundArrays.map((item : ICategory , index : number) => <SmallDealItem key={index} item={item} /> ) : shuffledArray ?*/}
                {/*    shuffledArray?.map((item: ICategory, index: number) => <SmallDealItem key={index} item={item}></SmallDealItem>) : Skeleton()}*/}

            </div>
        </div>
    )
}

export default Grid