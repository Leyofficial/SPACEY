import style from './ShoppingCart.module.scss';
import TableProducts from "./TableProducts/TableProducts.tsx";
import {useEffect} from "react";

const ShoppingCart = () => {

    const currentUser = '656f79c08c99f3557cddd415'
    useEffect(() => {

    },[currentUser])

    return (
        <section className={style.cart}>
            <div className={style.container}>
                <div className={style.products}>
                    <h1>Shopping Card</h1>
                    <TableProducts></TableProducts>
                </div>

            </div>
        </section>
    );
};

export default ShoppingCart;