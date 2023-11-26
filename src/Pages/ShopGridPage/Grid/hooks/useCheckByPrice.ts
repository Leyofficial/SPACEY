import {useGetParams} from "../../../../hooks/params/getAllParams.ts";

export function useCheckByPrice(array: any) {
    const {maxPriceParam, minPriceParam } = useGetParams();
    return array.filter((item: any) => {
        if (maxPriceParam && minPriceParam) {
            return (
                item.product.price <= maxPriceParam &&
                item.product.price >= minPriceParam
            );
        }
    })
}