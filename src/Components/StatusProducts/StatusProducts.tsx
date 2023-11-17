import style from './StatusProducts.module.scss'
import {ICategory} from "../../types.ts";
import StatusProduct from "./StatusProduct/StatusProduct.tsx";
import {useEffect, useState} from "react";
import {shuffleArray} from "../../Utility/shufflerArray/shufllerArray.ts";

interface IStatusProduct {
    items: {
        categories: ICategory[]
    }

}

function StatusProducts({items}: IStatusProduct) {
    const [filteredStateType, setFilteredState] = useState<ICategory[]>([]);
    const [filteredItem , setFilteredItem] = useState([])
    useEffect(() => {
        if (!items) return;

        const filteredItem = items.filter((item: { product: { stateType: string; }; }) => item.product.stateType !== 'none' && item.product.stateType);
        if (filteredItem.length > 0) {
            setFilteredItem(filteredItem)
            const stateType = filteredItem.map(((item: any) => item.product.stateType))
            const uniqueCategories = stateType.filter((item: string, index: number): boolean => {
                return stateType.indexOf(item) === index;
            });
            setFilteredState(uniqueCategories.splice(0 , 4));
        }
    }, [items]);

    return (
        <div className={style.block}>
            <div className={style.itemsBlock}>
                {/*{ filteredItems.length > 0 ? filteredItems.map((item : any , index : number) =>*/}
                {/* <StatusProduct title={filteredStateType[index]} item={item}/>*/}
                {/*) : <Skeleton variant={'rounded'} width={100} height={20}/>}*/}
                {filteredStateType.map(item => {
                    return <StatusProduct items={filteredItem} title={item}/>
                })}
            </div>
        </div>
    )
}

export default StatusProducts