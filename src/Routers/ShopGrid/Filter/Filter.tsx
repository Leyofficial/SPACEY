import style from './Filter.module.scss'
import CategoryFilter from "./CategoryFilter/CategoryFilter.tsx";
function Filter () {
    return (
        <div className={style.block}>
            <CategoryFilter/>
        </div>
    )
}

export default Filter