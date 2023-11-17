import style from './StatusProducts.module.scss'
import {ICategory} from "../../types.ts";
import StatusProduct from "./StatusProduct/StatusProduct.tsx";
import {useEffect, useState} from "react";

export interface IStatusProduct {
    items: ICategory[],
    item? : ICategory[]
}

function StatusProducts({items}: IStatusProduct) {
    const [filteredStateType, setFilteredState] = useState<ICategory[]>([]);
    useEffect(() => {
        if (!items) return;

        const filteredItem = items.filter((item : ICategory) => item.product.stateType !== 'none' && item.product.stateType);
        if (filteredItem.length > 0) {
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
                {filteredStateType.map(item => {
                    return <StatusProduct title={item}/>
                })}
            </div>
        </div>
    )
}

export default StatusProducts