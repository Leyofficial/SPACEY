import style from './ShopGrid.module.scss'
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import Filter from "../../Pages/ShopGridPage/Filter/Filter.tsx";
import Grid from "../../Pages/ShopGridPage/Grid/Grid.tsx";
import Footer from "../../Components/Footer/Footer.tsx";

function ShopGrid() {
    return (
        <>
            <div className={style.breadCrumb}>
                <BreadCrumb/>
            </div>
            <div className={style.block}>
                <div className={style.blockWrapper}>
                    <main className={style.filters}>
                        <Filter/>
                    </main>
                    <section className={style.itemsBlock}>
                        <Grid/>
                    </section>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default ShopGrid