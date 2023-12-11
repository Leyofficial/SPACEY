import style from './Wish.module.scss'
import WishItem from "./WishItem/WishItem.tsx";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../redux/hooks/hooks.ts";
import axios from "axios";
import WishItemSkeleton from "./WishItemSkeleton/WishItemSkeleton.tsx";

function Wish() {
    const {user} = useAppSelector((state) => state.user);
    const [allId , setAllId] = useState<string[]>([]);

    useEffect(() => {
        if (!user._id) return
       axios.get(`https://spacey-server.vercel.app/wishList/${user._id}`).then((res) => {
            setAllId(res?.data?.foundItems?.items);
        });
    },[])

    return (
        <div className={style.block}>
            <h2 className={style.title}>Wishlist</h2>
            <ul className={style.tab}>
                <div className={style.product}>
                    Products
                </div>
                <div className={style.itemsTab}>
                    <li className={style.basic}>
                        Price
                    </li>
                    <li className={style.basic}>
                        Stock Status
                    </li>
                    <li className={style.basic}>
                        Actions
                    </li>
                </div>

            </ul>
            <div className={style.items}>
                { allId && allId.length > 0 ? allId.map((item : string , index : number) => {
                        return <WishItem key={index} id={item}/>
                    }
                ) : <WishItemSkeleton/>}
            </div>
        </div>
    )
}
export default Wish