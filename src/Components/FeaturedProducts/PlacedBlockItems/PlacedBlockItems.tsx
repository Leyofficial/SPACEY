import style from './PlacedBlockItems.module.scss'
import {useEffect, useState} from "react";
import {getAllItems} from "../../../ApiRequests/Items/Items.ts";
import {ICategory} from "../../Header/Category/ProperWindow/PopperItem/PopperItem.tsx";
import {shuffleArray} from "../../../Utility/shufflerArray/shufllerArray.ts";
import SmallDealItem from "../../../Pages/MainPage/Deals/SmallDeal/SmallDealItem.tsx";

interface IPlacedBlockItemsProps {
    activeItemProducts: any
}

const PlacedBlockItems = ({activeItemProducts}: IPlacedBlockItemsProps) => {
    const [items, setItems] = useState<ICategory[] | null>(null)
    const [shuffledArray, setShuffledArray] = useState([])
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
                shuffledArray?.map((item, index) => <SmallDealItem key={index}
                                                                   item={item}></SmallDealItem>)}

        </div>
    );
};

export default PlacedBlockItems;