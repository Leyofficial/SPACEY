import style from './PlacedBlockItems.module.scss'
import {useEffect, useState} from "react";
import {getAllItems} from "../../../ApiRequests/Items/Items.ts";
import {shuffleArray} from "../../../Utility/shufflerArray/shufllerArray.ts";
import SmallDealItem from "../../../Pages/MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import {ICategory} from "../../../types.ts";
import SmallDealSkeleton from "../../../Pages/MainPage/Deals/SmallDeal/SmallDealSkeleton.tsx";

interface IPlacedBlockItemsProps {
    activeItemProducts: ICategory[] | null
}

const PlacedBlockItems = ({activeItemProducts}: IPlacedBlockItemsProps) => {
    const [items, setItems] = useState<ICategory[] | null>(null)
    const [shuffledArray, setShuffledArray] = useState<ICategory[] | null>(null)
    useEffect(() => {
        getAllItems().then(res => setItems(res.data.categories))
    }, [])

    const numSkeleton = useState(8)[0];

    function Skeleton() {
        return (
            <>
                {Array(numSkeleton).fill(null).map(() => <SmallDealSkeleton/>)}
            </>
        )
    }

    useEffect(() => {
        if (items)
            setShuffledArray(shuffleArray(items).slice(0, 8))
    }, [items])

    return (
        <div className={style.container}>
            {!items ? Skeleton() : activeItemProducts ?
                activeItemProducts?.map((item, index) => <SmallDealItem key={index}
                                                                        item={item}></SmallDealItem>)
                :
                shuffledArray?.map((item:ICategory, index:number) => <SmallDealItem key={index}
                                                                                    item={item}></SmallDealItem>) }
        </div>
    );
};

export default PlacedBlockItems;