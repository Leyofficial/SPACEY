import style from './ShopGrid.module.scss'
import {Outlet} from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
function ShopGrid () {
    // const [categoriesItems, setCategoriesItems] = useState([]);
    return (
        <div className={style.block}>
            <header className={style.header}>
                <div className={style.breadCrumb}>
                    <BreadCrumb/>
                </div>
            </header>
            <section>
                <Outlet/>
            </section>
        </div>
    )
}
export default ShopGrid