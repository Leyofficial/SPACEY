import style from './PlacedBlockItems.module.scss'
import {useEffect, useState} from "react";
import {getAllItems} from "../../../ApiRequests/Items/Items.ts";
import {shuffleArray} from "../../../Utility/shufflerArray/shufllerArray.ts";
import SmallDealItem from "../../../Pages/MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import {ICategory} from "../../../types.ts";

interface IPlacedBlockItemsProps {
    activeItemProducts: ICategory[] | null
}

const PlacedBlockItems = ({activeItemProducts}: IPlacedBlockItemsProps) => {
    const [items, setItems] = useState<ICategory[] | null>(null)
    const [shuffledArray, setShuffledArray] = useState<ICategory[] | null>(null)
    useEffect(() => {
        getAllItems().then(res => setItems(res.data.categories))
    }, [])


    useEffect(() => {
        if (items)
            setShuffledArray(shuffleArray(items).slice(0, 8))
    }, [items])

    return (
        <div className={style.container}>
            {activeItemProducts ?
                activeItemProducts?.map((item, index) => <SmallDealItem key={index}
                                                                        item={item}></SmallDealItem>)
                :
                shuffledArray?.map((item:ICategory, index:number) => <SmallDealItem key={index}
                                                                   item={item}></SmallDealItem>)}

        </div>
    );
};

export default PlacedBlockItems;