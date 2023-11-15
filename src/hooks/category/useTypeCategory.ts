export function useTypeCategory(uniqueCategories: any[], categoryArray: string | string[] , callback : any) {
    const selectType =  uniqueCategories.filter((item : string) => {
        return categoryArray.includes(item)
    })
    callback(selectType);
}