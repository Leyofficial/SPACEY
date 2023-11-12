import style from './FeaturedProducts.module.scss'
import ListProducts from "./ListProducts/ListProducts.tsx";
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import backgroundImage from '../../assets/background/featuredProducts.jpg'
import PlacedBlockItems from "./PlacedBlockItems/PlacedBlockItems.tsx";

const FeaturedProducts = () => {
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
                    <header>
                        <h1>Featured Products</h1>
                        <ListProducts></ListProducts>
                    </header>

                    <main>
                        <PlacedBlockItems></PlacedBlockItems>
                    </main>
                </section>

            </div>
        </div>
    );
};

export default FeaturedProducts;