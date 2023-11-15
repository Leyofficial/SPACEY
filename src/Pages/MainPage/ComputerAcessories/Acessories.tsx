import style from './Acessrories.module.scss'
import ListProducts from "../../../Components/FeaturedProducts/ListProducts/ListProducts.tsx";
import {useEffect, useState} from "react";
import {ICategory} from "../../../types.ts";
import PlacedBlockItems from "../../../Components/FeaturedProducts/PlacedBlockItems/PlacedBlockItems.tsx";
import {getSingleCategory} from "../../../ApiRequests/Items/getSingleCategory.ts";
import {shuffleArray} from "../../../Utility/shufflerArray/shufllerArray.ts";
import {getAllItems} from "../../../ApiRequests/Items/Items.ts";
import SmallDealSkeleton from "../Deals/SmallDeal/SmallDealSkeleton.tsx";
import {computerAcessories} from "./ComputerAcessories.ts";
import DiscountItemSI from "../../../Components/Discount/DiscountItemSI/DiscountItemSI.tsx";

function Acessories() {
    const numSkeleton = useState(8)[0];
    const [activeItem, setActiveItem] = useState<string | null>('All Product')
    const [activeItemProducts, setActiveItemProducts] = useState<ICategory[] | null>(null)
    const [discount , setDiscount] = useState();

    useEffect(() => {
        if (activeItem && activeItem !== 'All Product' ) {
            getSingleCategory(activeItem).then(res => setActiveItemProducts(shuffleArray(res.foundProduct).slice(0, 8)))
        }
    }, [activeItem])

    useEffect(() => {
        if (activeItem === 'All Product') {
            getAllItems().then(res => {
                const array = shuffleArray(res.data.categories);
                const filtered = array.filter(item => computerAcessories.includes(item.categoryOfProduct)).slice(0 , 8)
                setActiveItemProducts(filtered)
                setDiscount(filtered[0])
            })
        }
    }, [activeItem]);

    function Skeleton() {
        return (
            <div className={style.skeletonBlock}>
                {Array(numSkeleton).fill(null).map(() => <SmallDealSkeleton/>)}
            </div>
        )
    }

    return (
        <div className={style.block}>

                <header className={style.lists}>
                    <h1 className={style.title}>Computer Accessories </h1>
                    <ListProducts typeCategory={'Computer Accessories'} activeItem={activeItem}
                                  callback={setActiveItem}></ListProducts>
                </header>
             <div className={style.items}>
                <main>
                    {activeItemProducts ? <PlacedBlockItems activeItemProducts={activeItemProducts}></PlacedBlockItems> : Skeleton()}

                </main>
                <section>
                    {discount ?     <DiscountItemSI idItem={discount?._id}/> : null}

                </section>
             </div>
        </div>
    )
}

export default Acessories