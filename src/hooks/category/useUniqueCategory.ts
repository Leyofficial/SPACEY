import {useEffect, useState} from "react";
import {ICategory} from "../../types.ts";
import {getTypeOfCategory} from "./useTypeCategory.ts";
import {computerAcessories} from "../../Pages/MainPage/ComputerAcessories/ComputerAcessories.ts";
import {featuredProducts} from "../../Components/FeaturedProducts/ListProducts/featuredProducts.ts";

export const useUniqueCategory = (data: { categories: ICategory[]  , status : string}, typeCategory?: string) => {
    const [filteredData, setFilteredData] = useState<[] | string[]>([])
    useEffect(() => {
        if (data?.status === 'error') return
        if (data) {
            const category = data?.categories.map(((item: { categoryOfProduct: string; }) => item.categoryOfProduct))
            const uniqueCategories = category.filter((item: string, index: number): boolean => {
                return category.indexOf(item) === index;
            });
            if (typeCategory) {
                setFilteredData(uniqueCategories.slice(0,4))
            } else {
                setFilteredData(uniqueCategories)
            }

            if (typeCategory && typeCategory?.toLowerCase() === 'computer accessories') {
                getTypeOfCategory(uniqueCategories, computerAcessories, setFilteredData)
            } else if(typeCategory && typeCategory?.toLowerCase() === 'featured products') {
                getTypeOfCategory(uniqueCategories,featuredProducts,setFilteredData)
            }
        }
    }, [data]);

    return {filteredData}

}