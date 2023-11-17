import {ICategory} from "../../types.ts";
interface IUseStatusProduct {
    items : ICategory[],
    callback : (splice: any[]) => void,
}
export function useStatusProduct({items , callback} : IUseStatusProduct) {
    const filteredItem = items.filter((item : ICategory) => item.product.stateType !== 'none' && item.product.stateType);
    if (filteredItem.length > 0) {
        const stateType = filteredItem.map(((item: any) => item.product.stateType))
        const uniqueCategories = stateType.filter((item: string, index: number): boolean => {
            return stateType.indexOf(item) === index;
        });
        callback(uniqueCategories.splice(0 , 4));
    }
}