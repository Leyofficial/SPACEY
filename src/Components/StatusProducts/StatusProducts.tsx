import style from './StatusProducts.module.scss'
import {ICategory} from "../../types.ts";
import StatusProduct from "./StatusProduct/StatusProduct.tsx";
import {useEffect, useState} from "react";
import {useStatusProduct} from "../../hooks/category/useStatusProduct.ts";

export interface IStatusProduct {
    items: ICategory[],
    item? : ICategory[]
}

function StatusProducts({items}: IStatusProduct) {
    const [filteredStateType, setFilteredState] = useState<ICategory[]>([]);
    useEffect(() => {
        if (!items) return;
        useStatusProduct({ items, callback: setFilteredState });
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