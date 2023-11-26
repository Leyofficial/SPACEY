import style from './ShopGrid.module.scss'
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import Filter from "../../Pages/ShopGridPage/Filter/Filter.tsx";
import Grid from "../../Pages/ShopGridPage/Grid/Grid.tsx";

function ShopGrid() {
    return (
        <>
            <header className={style.header}>
                <div className={style.wrapper}>
                    <div className={style.breadCrumb}>
                        <BreadCrumb/>
                    </div>
                </div>
            </header>
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
        </>
    )
}

export default ShopGrid