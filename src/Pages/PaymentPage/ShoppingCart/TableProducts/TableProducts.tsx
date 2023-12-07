import {Table} from "@mui/material";
import SingleTableProduct from "./SingleTableProduct/SingleTableProduct.tsx";
import {IProduct} from "../../../../types.ts";
import {useAppSelector} from "../../../../redux/hooks/hooks.ts";
import {IShoppingItems} from "../shoppingCartTypes.ts";
import style from './TableProducts.module.scss'


// function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
// ) {
//     return { name, calories, fat, carbs, protein };
// }
//
// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
interface ITableProducts {
    products: IShoppingItems[] | null
}

export default function TableProducts({products}: ITableProducts) {
    console.log(products)
    return (
     <table className={style.table}>
            <thead>
            <tr>
                <th></th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub-total</th>
            </tr>
            </thead>
            <tbody>
            {products?.map((product:IShoppingItems,index:number) => (
               <SingleTableProduct key={index} product={product} index={index}></SingleTableProduct>
            ))}
            </tbody>
     </table>
    );
}