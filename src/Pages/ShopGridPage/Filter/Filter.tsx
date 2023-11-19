import style from './Filter.module.scss'
import CategoryFilter from "./CategoryFilter/CategoryFilter.tsx";
import PriceRange from "./PriceRange/PriceRange.tsx";
import PriceFilter from "./PriceFilter/PriceFilter.tsx";
function Filter () {
    return (
        <div className={style.block}>
            <CategoryFilter/>
            <PriceRange/>
            <PriceFilter/>
        </div>
    )
}

export default Filter