import style from './FeaturedProducts.module.scss'
import ListProducts from "./ListProducts/ListProducts.tsx";
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import backgroundImage from '../../assets/background/featuredProducts.jpg'
import PlacedBlockItems from "./PlacedBlockItems/PlacedBlockItems.tsx";
import {useEffect, useState} from "react";
import {getSingleCategory} from "../../ApiRequests/Items/getSingleCategory.ts";
import {getAllItems} from "../../ApiRequests/Items/Items.ts";
import {shuffleArray} from "../../Utility/shufflerArray/shufllerArray.ts";
import {ICategory} from "../../types.ts";
import {featuredProducts} from "./ListProducts/featuredProducts.ts";


const FeaturedProducts = () => {
    const [activeItem,setActiveItem] = useState<string | null>(null)
    const [activeItemProducts,setActiveItemProducts] = useState<ICategory[] | null>(null)

    useEffect(() => {
        if(activeItem){
         getSingleCategory(activeItem).then(res => setActiveItemProducts(shuffleArray(res.foundProduct).slice(0,8)))
        }
        if(activeItem === 'All Product') {
            getAllItems().then(res => {
                const array = shuffleArray(res.data.categories)
                const filtered = array.filter((item:ICategory) => featuredProducts.includes(item.categoryOfProduct)).slice(0,8)
                setActiveItemProducts(filtered)
            })
        }
    },[activeItem])

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <section>
                    <div className={style.coverImage}>
                        <div className={style.title}>
                            <h3>COMPUTER & ACCESSORIES</h3>
                            <h1>32 % Discount</h1>
                            <p>For all electronics products</p>
                        </div>
                        <p className={style.offer}>Offers ends in <span>ENDS OF CHRISTMAS</span></p>
                        <div className={style.btn}><CustomBtn text={'SHOP NOW'}></CustomBtn></div>

                    </div>
                    <img src={backgroundImage} alt={'Featured'}/>
                </section>

                <section className={style.rightBlock}>
                    <header className={style.lists}>
                        <h1>Featured Products</h1>
                        <ListProducts typeCategory={'featured products'} activeItem={activeItem} callback={setActiveItem}></ListProducts>
                    </header>

                    <main>
                        <PlacedBlockItems activeItemProducts={activeItemProducts}></PlacedBlockItems>
                    </main>
                </section>

            </div>
        </div>
    );
};

export default FeaturedProducts;