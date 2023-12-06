import style from './Wish.module.scss'
import img from './../../assets/img/dis.png'
import WishItem from "./WishItem/WishItem.tsx";
import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";
function Wish() {
    // const {data} = UseCustomQuery(`https://spacey-server.vercel.app/api/${productId}`)
    const wishList = [
        {
            img  : img,
            productTitle : 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black',
            percentageOfDiscount : 40,
            price : 1299,
            status : 'IN STOCK'
        }
    ]
    return (
        <div className={style.block}>
            <h2>Wishlist</h2>
            <div className={style.items}>
                {wishList.map((item) =>
                <WishItem obj={item}  key={item.productTitle}/>
                )}
            </div>
        </div>
    )
}
export default Wish