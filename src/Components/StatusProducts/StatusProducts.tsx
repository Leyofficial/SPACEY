import style from './StatusProducts.module.scss'
import {ICategory} from "../../types.ts";
import StatusProduct from "./StatusProduct/StatusProduct.tsx";
import {useEffect, useState} from "react";
import {Skeleton} from "@mui/material";
interface IStatusProduct {
        categories : ICategory[]
}
function StatusProducts({items} : IStatusProduct) {
    const [filtered , setFiltered] = useState<ICategory[]>([]);
    useEffect(() => {
        if (!items) return;

        const item = items?.filter((category) => {
            category.product[titleTypes.map((item) =>  item)]
        });
        console.log(item)


        setFiltered(item);
    }, [items]);

    const titleTypes: string[] = [
        'flashSale',
        'bestSellers',
        'topRated',
        'newArrival',
    ];


    return (
        <div className={style.block}>
            <div className={style.itemsBlock}>
                {/*{ filtered.length > 0 ? filtered.map((item : ICategory) =>*/}
                {/* <StatusProduct item={item}/>*/}
                {/*) : <Skeleton variant={'rounded'} width={100} height={20}/>}*/}
            </div>
        </div>
    )
}
export default StatusProducts