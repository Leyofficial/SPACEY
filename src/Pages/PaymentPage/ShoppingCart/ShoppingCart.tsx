import style from './ShoppingCart.module.scss';
import TableProducts from "./TableProducts/TableProducts.tsx";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../../redux/hooks/hooks.ts";
import {getBasketItems} from "../../../ApiRequests/Items/basketItems.ts";
import {IShoppingItems} from "./shoppingCartTypes.ts";
import CardTotals from "./CardTotals/CardTotals.tsx";

const ShoppingCart = () => {
    const {user} = useAppSelector(state => state.user)
    const [basketProducts, setBasketProducts] = useState<IShoppingItems[] | null>(null)

    useEffect(() => {
        getBasketItems(user?._id).then(res => setBasketProducts(res.data.foundOrders?.products))
    }, [user])

    const updateBasketItem = () => {
        getBasketItems(user?._id).then(res => setBasketProducts(res.data.foundOrders?.products))
    }

    return (
        <section className={style.cart}>
            <div className={style.container}>
                <div className={style.products}>
                    <h1>Shopping Card</h1>
                    <TableProducts products={basketProducts} updateCart={updateBasketItem}></TableProducts>
                </div>
                <div className={style.totalWrapper}>
                    <CardTotals totalData={basketProducts}></CardTotals>
                </div>
            </div>
        </section>
    );
};

export default ShoppingCart;