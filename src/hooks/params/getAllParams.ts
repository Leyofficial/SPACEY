export function useGetParams () {
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    const minPriceParam = queryParams.get("minPrice");
    const maxPriceParam = queryParams.get("maxPrice");
    return {categoryParam , maxPriceParam , minPriceParam}
}