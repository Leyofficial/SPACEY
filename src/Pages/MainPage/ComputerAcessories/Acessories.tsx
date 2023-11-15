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

function Acessories() {
    const numSkeleton = useState(8)[0];
    const [activeItem, setActiveItem] = useState<string | null>('All Product')
    const [activeItemProducts, setActiveItemProducts] = useState<ICategory[] | null>(null)

    useEffect(() => {
        if (activeItem && activeItem !== 'All Product' ) {
            getSingleCategory(activeItem).then(res => setActiveItemProducts(shuffleArray(res.foundProduct).slice(0, 8)))
        }
    }, [activeItem])

    useEffect(() => {
        if (activeItem === 'All Product') {
            getAllItems().then(res => {
                const array = shuffleArray(res.data.categories);
                const filtered = array.filter(item => computerAcessories.includes(item.categoryOfProduct))
                setActiveItemProducts(filtered)
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
            <div className={style.items}>
                <header className={style.lists}>
                    <h1 className={style.title}>Computer Accessories </h1>
                    <ListProducts typeCategory={'Computer Accessories'} activeItem={activeItem}
                                  callback={setActiveItem}></ListProducts>
                </header>

                <main>
                    <PlacedBlockItems activeItemProducts={activeItemProducts}></PlacedBlockItems>
                </main>
            </div>
        </div>
    )
}

export default Acessories