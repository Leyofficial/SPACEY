import style from './ShoppingCart.module.scss';
import TableProducts from "./TableProducts/TableProducts.tsx";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../../redux/hooks/hooks.ts";
import {getBasketItems} from "../../../ApiRequests/Items/basketItems.ts";
import {IShoppingItems} from "./shoppingCartTypes.ts";

const ShoppingCart = () => {
    const {user} = useAppSelector(state => state.user)
    const [basketProducts, setBasketProducts] = useState<IShoppingItems[] | null>(null)

    useEffect(() => {
        getBasketItems(user?._id).then(res => setBasketProducts(res.data.foundOrders?.products))
    }, [user])

    return (
        <section className={style.cart}>
            <div className={style.container}>
                <div className={style.products}>
                    <h1>Shopping Card</h1>
                    <TableProducts products={basketProducts}></TableProducts>
                </div>

            </div>
        </section>
    );
};

export default ShoppingCart;