import style from './StatusProducts.module.scss'
import {ICategory} from "../../types.ts";
import StatusProduct from "./StatusProduct/StatusProduct.tsx";
import {useEffect, useState} from "react";
import {customStatusProduct} from "../../hooks/category/useStatusProduct.ts";

export interface IStatusProduct {
    items: ICategory[],
    item? : ICategory[]
}

function StatusProducts({items}: IStatusProduct) {

    const [filteredStateType, setFilteredState] = useState<ICategory[]>([]);
    useEffect(() => {
        if (!items) return;
        customStatusProduct({ items, callback: setFilteredState });
    }, [items]);

    return (
        <div className={style.block}>
            <div className={style.itemsBlock}>
                {filteredStateType.map((item: ICategory , index : number) => {
                    return <StatusProduct key={index} title={item}/>
                })}
            </div>
        </div>
    )
}

export default StatusProducts