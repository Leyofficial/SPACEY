import style from './ShopGrid.module.scss'
import {Outlet, useParams} from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import Filter from "../../Pages/ShopGridPage/Filter/Filter.tsx";
import {useEffect} from "react";
function ShopGrid () {
    const params = useParams()
    useEffect(() => {
        console.log(params)
    },[params])
    // const [categoriesItems, setCategoriesItems] = useState([]);
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

                <main className={style.filters}>
                    <Filter/>
                </main>
                <section>
                    <Outlet/>
                </section>
            </div>
        </>
    )
}
export default ShopGrid