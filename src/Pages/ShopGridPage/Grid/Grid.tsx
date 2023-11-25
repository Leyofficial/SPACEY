import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./Grid.module.scss";
import { ICategory } from "../../../types.ts";
import SmallDealItem from "../../MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import { getAllItems } from "../../../ApiRequests/Items/Items.ts";
import SmallDealSkeleton from "../../MainPage/Deals/SmallDeal/SmallDealSkeleton.tsx";
import { CustomSearch } from "../../../Utility/CustomSearch/CustomSearch.tsx";
import { getSingleCategory } from "../../../ApiRequests/Items/getSingleCategory.ts";
import { useGetParams } from "../../../hooks/params/getAllParams.ts";
import {NotFound} from "../../../Utility/NotFound/NotFound.tsx";
import {CustomPagination} from "../../../Utility/Pagination/CustomPagination.tsx";

interface ISkeleton {
    itemsOnScreen : number
}

function Grid() {
    const location = useLocation();
    const itemsOnScreen = 24;
    const [items, setItems] = useState<ICategory[]>([]);
    const [valueInput, setValueInput] = useState<string>("");
    const [foundArrays, setFound] = useState<ICategory[]>([]);
    const [isFound, setFoundItem] = useState(true);
    const [page, setPage] = useState<number>(1);
    const [currentProducts , setCurrentProducts] = useState<ICategory[]>([])


    const indexOfLastCourse = page * itemsOnScreen
    const indexOfFirstCourse = indexOfLastCourse - itemsOnScreen
    useEffect(() => {
        const currentProducts : ICategory[] = foundArrays.slice(indexOfFirstCourse, indexOfLastCourse);
        setCurrentProducts(currentProducts)
    }, [foundArrays]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

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
                    setFound(priceFiltered);
                }
            } else {
                setFound(res.foundProduct);
            }
        });
    }, [location.search]);

    useEffect(() => {
        getAllItems().then((res) => setItems(res.data.categories));
    }, []);

    useEffect(() => {
        if (items) {
            setFound(items);
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
                setFound(checkByPrice);
            }
        } else {
            setFoundItem(checkByCategory && checkByCategory.length > 0);
            setFound(checkByCategory);
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
                    {currentProducts.length > 0 ? (
                        currentProducts?.map((item: ICategory, index: number) => (
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
            <section className={style.pagination}>
                <CustomPagination callback={handleChange} page={page} count={ Math.round(( foundArrays.length + 1 ) / itemsOnScreen ) }/>
            </section>
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

export default Grid;
