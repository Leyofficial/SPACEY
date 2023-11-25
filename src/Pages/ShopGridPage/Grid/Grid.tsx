import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./Grid.module.scss";
import { ICategory } from "../../../types.ts";
import SmallDealItem from "../../MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import { getAllItems } from "../../../ApiRequests/Items/Items.ts";
import SmallDealSkeleton from "../../MainPage/Deals/SmallDeal/SmallDealSkeleton.tsx";
import { CustomSearch } from "../../../Utility/CustomSearch/CustomSearch.tsx";
import { getSingleCategory } from "../../../ApiRequests/Items/getSingleCategory.ts";
import { useGetParams } from "../../../hooks/params/getAllParams.ts";

interface ISkeleton {
    itemsOnScreen : number
}

function NotFound() {
    return (
        <div className={style.notFound}>
            <p className={style.notFoundText}>
                Product<span className={style.span}> not found</span> :(
            </p>
        </div>
    );
}

function Skeleton({itemsOnScreen} : ISkeleton) {
    return (
        <div className={style.skeletonBlock}>
            {Array(itemsOnScreen).fill(null).map(() => (
                <SmallDealSkeleton />
            ))}
        </div>
    );
}

function Grid() {
    const location = useLocation();
    const itemsOnScreen = 24;
    const [items, setItems] = useState<ICategory[]>([]);
    const [valueInput, setValueInput] = useState<string>("");
    const [foundArrays, setFound] = useState<ICategory[]>([]);
    const [isFound, setFoundItem] = useState(true);

    useEffect(() => {
        const { categoryParam, maxPriceParam, minPriceParam } = useGetParams();
        if (!categoryParam) return;

        setFound([]);
        getSingleCategory(categoryParam).then((res) => {
            if (res.status === "error") return;
            if (minPriceParam && maxPriceParam) {
                const priceFiltered = res.foundProduct.filter(
                    (item: any) =>
                        item.product.price <= maxPriceParam &&
                        item.product.price >= minPriceParam
                );
                if (priceFiltered.length === 0) {
                    setFoundItem(false);
                } else {
                    setFoundItem(true);
                    setFound(priceFiltered.slice(0, itemsOnScreen));
                }
            } else {
                setFound(res.foundProduct.slice(0, itemsOnScreen));
            }
        });
    }, [location.search]);

    useEffect(() => {
        getAllItems().then((res) => setItems(res.data.categories));
    }, []);

    useEffect(() => {
        if (items) {
            setFound(items.slice(0, itemsOnScreen));
        }
    }, [items]);

    useEffect(() => {
        const { categoryParam, maxPriceParam, minPriceParam } = useGetParams();

        if (!valueInput || !categoryParam) return;

        const foundItem: ICategory[] = items.filter((item: ICategory) =>
            item.brand.toLowerCase().includes(valueInput.toLowerCase())
        );
        const checkByCategory: ICategory[] = foundItem.filter((item: ICategory) =>
            item.categoryOfProduct.includes(categoryParam)
        );
        const checkByPrice: ICategory[] = checkByCategory.filter((item: any) => {
            if (maxPriceParam && minPriceParam) {
                return (
                    item.product.price <= maxPriceParam &&
                    item.product.price >= minPriceParam
                );
            }
        });

        if (minPriceParam && maxPriceParam) {
            if (checkByPrice.length === 0) {
                setFoundItem(false);
            } else {
                setFoundItem(true);
                setFound(checkByPrice.slice(0, itemsOnScreen));
            }
        } else {
            setFoundItem(checkByCategory && checkByCategory.length > 0);
            setFound(checkByCategory.slice(0, itemsOnScreen));
        }
    }, [valueInput]);

    return (
        <div className={style.block}>
            <CustomSearch
                placeholder={"Search for brand..."}
                callback={setValueInput}
            />

            {!isFound ? (
                <NotFound />
            ) : (
                <div className={style.items}>
                    {foundArrays.length > 0 ? (
                        foundArrays?.map((item: ICategory, index: number) => (
                            <SmallDealItem
                                key={index}
                                item={item}
                            ></SmallDealItem>
                        ))
                    ) : (
                        <Skeleton itemsOnScreen={itemsOnScreen} />
                    )}
                </div>
            )}
        </div>
    );
}

export default Grid;
