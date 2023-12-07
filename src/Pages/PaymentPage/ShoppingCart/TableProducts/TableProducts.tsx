
import SingleTableProduct from "./SingleTableProduct/SingleTableProduct.tsx";
import {IShoppingItems} from "../shoppingCartTypes.ts";
import style from './TableProducts.module.scss'

interface ITableProducts {
    products: IShoppingItems[] | null
}

export default function TableProducts({products}: ITableProducts) {
    console.log(products)
    return (
        <>
        <div className={style.cartList}>
            <ul className={style.headerList}>
                <li className={style.productItem}></li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Sub-total</li>
            </ul>
            <div className={style.mainList}>
                {products?.map((product:IShoppingItems,index:number) => (
                              <SingleTableProduct key={index} product={product} index={index}></SingleTableProduct>
                           ))}
            </div>
        </div>
        </>
    );
}