import style from './Filter.module.scss'
import CategoryFilter from "./CategoryFilter/CategoryFilter.tsx";
import PriceRange from "./PriceRange/PriceRange.tsx";
import PriceFilter from "./PriceFilter/PriceFilter.tsx";
import SectionTestTags from "../../../Components/PopularTags/SectionTestTags.tsx";
function Filter () {
    return (
        <div className={style.block}>
            <CategoryFilter/>
            <PriceRange/>
            <PriceFilter/>
            <SectionTestTags></SectionTestTags>
        </div>
    )
}

export default Filter