import style from './CategoryFilter.module.scss'
import {UseCustomQuery} from "../../../../ApiRequests/customQuery/customQuery.ts";
import {useUniqueCategory} from "../../../../hooks/category/useUniqueCategory.ts";
import SkeletonCategoryFilter from "./SkeletonCategoryFilter.tsx";
import {useState} from "react";
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import {CustomRadio} from "../../../../Utility/CustomRadio/CustomRadio.tsx";

function CategoryFilter () {
    const numSkeleton = useState(8)[0]
    const {data} = UseCustomQuery(`https://spacey-server.vercel.app/api`);
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
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        {filteredData ? (
                                filteredData.map((item: string, index: number) => (
                                    <CustomRadio key={index} text={item} />
                                ))
                            ) : Skeleton()}
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
}
export default CategoryFilter