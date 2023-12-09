
import SingleTableProduct from "./SingleTableProduct/SingleTableProduct.tsx";
import {IShoppingItems} from "../shoppingCartTypes.ts";
import style from './TableProducts.module.scss'
import Smile from "./Smile/Smile.tsx";

interface ITableProducts {
    products: IShoppingItems[] | null,
    updateCart:() => void
}

export default function TableProducts({products,updateCart}: ITableProducts) {

    return (
        <>
        <div className={style.cartList}>
            <ul className={style.headerList}>
                <li className={style.productItem}></li>
                <li className={style.price}>Price</li>
                <li>Quantity</li>
                <li className={style.subTotal}>Sub-total</li>
            </ul>
            <div className={style.mainList}>
                {products && products?.length > 0 ? products?.map((product:IShoppingItems, index:number) => (
                              <SingleTableProduct key={index} product={product} index={index} updateCart={updateCart}></SingleTableProduct>
                           )) : <Smile></Smile>}
            </div>
        </div>
        </>
    );
}