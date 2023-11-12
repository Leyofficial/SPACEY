import style from './PlacedBlockItems.module.scss'
import BlockItem from "../BlockItem/BlockItem.tsx";
import {useEffect, useState} from "react";
import {getAllItems} from "../../../ApiRequests/Items/Items.ts";
import {ICategory} from "../../Header/Category/ProperWindow/PopperItem/PopperItem.tsx";
import {shuffleArray} from "../../../Utility/shufflerArray/shufllerArray.ts";

const PlacedBlockItems = () => {
    const [items, setItems] = useState<ICategory[] | null>(null)
    const [shuffledArray, setShuffledArray] = useState([])
    useEffect(() => {
        getAllItems().then(res => setItems(res.data.categories))
    }, [])


    useEffect(() => {
        if (items)
            setShuffledArray(shuffleArray(items).slice(0,8))
    }, [items])
    return (
        <div className={style.container}>
            {shuffledArray?.map((item, index) => <BlockItem key={index} item={item}></BlockItem>)}
        </div>
    );
};

export default PlacedBlockItems;