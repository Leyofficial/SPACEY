import style from './Wish.module.scss';
import WishItem from './WishItem/WishItem.tsx';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks/hooks.ts';
import axios from 'axios';
import WishItemSkeleton from './WishItemSkeleton/WishItemSkeleton.tsx';

function Wish() {
    const { user } = useAppSelector((state) => state.user);
    const [allId, setAllId] = useState<string[]>([]);
    const [pending, setPending] = useState<boolean>(false);

    useEffect(() => {
        if (!user._id) return;

        setPending(true);

        axios.get(`https://spacey-server.vercel.app/wishList/${user._id}`).then((res) => {
            setAllId(res?.data?.foundItems?.items);
            setPending(false); // Set pending to false when the data is fetched
        });
    }, [user]);

    return (
        <div className={style.block}>
            <h2 className={style.title}>Wishlist</h2>
            <ul className={style.tab}>
                <div className={style.product}>Products</div>
                <div className={style.itemsTab}>
                    <li className={style.basic}>Price</li>
                    <li className={style.basic}>Stock Status</li>
                    <li className={style.basic}>Actions</li>
                </div>
            </ul>
            <div className={style.items}>
                {pending ? (
                    <WishItemSkeleton/>
                ) : allId && allId.length > 0 ? (
                    allId.map((item: string, index: number) => <WishItem key={index} id={item} />)
                ) : (
                    <div className={style.empty}><div className={style["tooltip-container"]}>
                        <span className={style.tooltip}>Wish list empty !</span>
                            <span className={style.text}>Empty</span>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Wish;
