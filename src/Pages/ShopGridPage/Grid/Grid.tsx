import style from './Grid.module.scss'
import {ICategory} from "../../../types.ts";
import SmallDealItem from "../../MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import {useEffect, useState} from "react";
import {getAllItems} from "../../../ApiRequests/Items/Items.ts";
import SmallDealSkeleton from "../../MainPage/Deals/SmallDeal/SmallDealSkeleton.tsx";
import {shuffleArray} from "../../../Utility/shufflerArray/shufllerArray.ts";
import {CustomSearch} from "../../../Utility/CustomSearch/CustomSearch.tsx";
import {useLocation} from "react-router-dom";
import {getSingleCategory} from "../../../ApiRequests/Items/getSingleCategory.ts";
function Grid() {
    const location = useLocation()
    const itemsOnScreen = 24
    const [items, setItems] = useState<ICategory[]>([]);
    const [valueInput , setValueInput] = useState<string>('')
    const [shuffledArray, setShuffledArray] = useState<ICategory[] >([]);
    const [foundArrays , setFound] = useState<ICategory[]>([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get("category");
        getSingleCategory(categoryParam).then(res => setFound(res.foundProduct))
        console.log('мы изменили ' + categoryParam)
    }, [location.search]); // Подписываемся на изменение строки поиска


    useEffect(() => {
        getAllItems().then(res => setItems(res.data.categories))
    }, []);
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get('category');
        if (!valueInput) return
        const foundItem : ICategory[]  =  items.filter((item : ICategory) => item.brand.toLowerCase().includes(valueInput.toLowerCase()));
        setFound(foundItem.slice(0 , itemsOnScreen))
    }, [valueInput]);
    // useEffect(() => {
    //
    //     if (categoryParam) {
    //         const filteredByCategory = items.filter((item : ICategory) => item.categoryOfProduct.toLowerCase().includes(categoryParam.toLowerCase()))
    //         const foundItem : ICategory[]  =  filteredByCategory.filter((item : ICategory) => item.brand.toLowerCase().includes(valueInput? valueInput.toLowerCase() : ''));
    //         setFound(foundItem.slice(0 , itemsOnScreen))
    //         return;
    //     } // tablet
    // }, [categoryParam]);

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