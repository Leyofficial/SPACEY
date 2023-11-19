import style from './CategoryFilter.module.scss'
import {UseCustomQuery} from "../../../../ApiRequests/customQuery/customQuery.ts";
import {useUniqueCategory} from "../../../../hooks/category/useUniqueCategory.ts";
import {CustomRadio} from "../../../../Utility/CustomRadio/CustomRadio.tsx";
import SkeletonCategoryFilter from "./SkeletonCategoryFilter.tsx";
import {useState} from "react";
function CategoryFilter () {
    const numSkeleton = useState(8)[0]
    const {data} = UseCustomQuery(`https://spacey-server.vercel.app/api`)
    // /product/category={price}&brand=${hoverBrand}
    const {filteredData} = useUniqueCategory(data)

    function Skeleton () {
        return (
            <>
                {Array(numSkeleton).fill(null).map(() => <SkeletonCategoryFilter/>)}
            </>
        )
    }

    return (
        <div className={style.block}>
            <div className={style.title}>
                Category
            </div>
            <div className={style.items}>
                {filteredData ? filteredData.map((item: string ) => {
                    return   <CustomRadio text={item}/>
                })
                : Skeleton()
                }
            </div>
        </div>
    )
}
export default CategoryFilter