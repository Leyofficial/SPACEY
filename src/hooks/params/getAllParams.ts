export function useGetParams () {
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    const minPriceParam = queryParams.get("minPrice") || 0;
    const maxPriceParam = queryParams.get("maxPrice") || 10000;
    return {categoryParam , maxPriceParam , minPriceParam}
}