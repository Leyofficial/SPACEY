import React, {useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import style from "./Grid.module.scss";
import {ICategory} from "../../../types.ts";
import SmallDealItem from "../../MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import {getAllItems} from "../../../ApiRequests/Items/Items.ts";
import {CustomSearch} from "../../../Utility/CustomSearch/CustomSearch.tsx";
import {getSingleCategory} from "../../../ApiRequests/Items/getSingleCategory.ts";
import {useGetParams} from "../../../hooks/params/getAllParams.ts";
import {NotFound} from "../../../Utility/NotFound/NotFound.tsx";
import {CustomPagination} from "../../../Utility/Pagination/CustomPagination.tsx";
import {SkeletonSmallCall} from "../../HeaderPage/Addvertation/SmallAdd/SmallAddSkeleton.tsx";
import {useCheckByPrice} from "./hooks/useCheckByPrice.ts";

// DO NOT TOUCH ANYTHING , IF SOMETHING WENT WRONG TEXT ME !!!
// DO NOT TOUCH ANYTHING , IF SOMETHING WENT WRONG TEXT ME !!!
// DO NOT TOUCH ANYTHING , IF SOMETHING WENT WRONG TEXT ME !!!
// DO NOT TOUCH ANYTHING , IF SOMETHING WENT WRONG TEXT ME !!!
// DO NOT TOUCH ANYTHING , IF SOMETHING WENT WRONG TEXT ME !!!
// DO NOT TOUCH ANYTHING , IF SOMETHING WENT WRONG TEXT ME !!!
// DO NOT TOUCH ANYTHING , IF SOMETHING WENT WRONG TEXT ME !!!
// DO NOT TOUCH ANYTHING , IF SOMETHING WENT WRONG TEXT ME !!!

const ITEMS_ON_SCREEN = 24;

function Grid() {
    const location = useLocation();
    const [items, setItems] = useState<ICategory[]>([]);
    const [valueInput, setValueInput] = useState<string>("");
    const [foundArrays, setFound] = useState<ICategory[]>([]);
    const [isFound, setFoundItem] = useState(true);
    const [page, setPage] = useState<number>(1);
    const [currentProducts, setCurrentProducts] = useState<ICategory[]>([]);
    const {categoryParam, maxPriceParam, minPriceParam} = useGetParams();

    const indexOfLastCourse = page * ITEMS_ON_SCREEN;
    const indexOfFirstCourse = indexOfLastCourse - ITEMS_ON_SCREEN;

    // Functions
    const fetchData = useCallback(async () => {
        try {
            const {data} = categoryParam ? await getSingleCategory(categoryParam) : await getAllItems();
            setItems(data?.categories || []);
        } catch (error) {
            console.error(error);
            setItems([]);
        }
    }, [categoryParam]);

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    // Filter
    useEffect(() => {
        // get All items or by CATEGORY
        fetchData().catch(err => console.error(err))
    }, [categoryParam]);


    useEffect(() => {
        // Pagination filter
        const currentProducts: ICategory[] = foundArrays.slice(indexOfFirstCourse, indexOfLastCourse);
        setCurrentProducts(currentProducts);
    }, [foundArrays, page]);

    useEffect(() => {
        // IF category changed
        if (!categoryParam) return;

        setFound([]);
        getSingleCategory(categoryParam).then((res) => {
            if (res.status === "error") return;
            if (minPriceParam && maxPriceParam) {
                const priceFiltered = useCheckByPrice(res.foundProduct)
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
        if (categoryParam) {
            getSingleCategory(categoryParam).then((res) => setItems(res.foundProduct))
        } else {
            getAllItems().then((res) => setItems(res.data.categories));
        }

    }, []);

    useEffect(() => {
        if (items) {
            const priceFiltered = useCheckByPrice(items)
            if (priceFiltered.length === 0) {
                setFoundItem(true);
                setFound(items)
            } else {
                setFoundItem(true);
                setFound(priceFiltered);
            }
        }
    }, [items]);


    useEffect(() => {
        // Filter by INPUT VALUE + CATEGORY + PRICE
        if (!valueInput) return; // * category Param
        const foundItem: ICategory[] = foundArrays.filter((item: ICategory) =>
            item.brand.toLowerCase().includes(valueInput.toLowerCase())
        );

        const checkByCategory: ICategory[] = foundItem.filter((item: ICategory) => {
            if (categoryParam) {
                return item.categoryOfProduct.includes(categoryParam);
            } else {
                return []
            }
        });
        const checkByPrice: ICategory[] = useCheckByPrice(checkByCategory)
        if (minPriceParam) {
            if (checkByPrice.length === 0) {
                setFoundItem(false);
            } else {
                setFoundItem(true);
                setFound(checkByPrice);
            }
        } else {
            setFoundItem(foundItem && foundItem.length > 0);
            setFound(checkByCategory)
        }
    }, [valueInput]);

    return (
        <div className={style.block}>
            <CustomSearch
                placeholder={"Search for brand..."}
                callback={setValueInput}
            />
            {!isFound ? (
                <NotFound/>
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
                        <div className={style.skeletonBlock}>
                            {SkeletonSmallCall(ITEMS_ON_SCREEN)}
                        </div>
                    )}
                </div>
            )}
            <section className={style.pagination}>
                <CustomPagination
                    callback={handleChange}
                    page={page}
                    count={Math.round((foundArrays.length + 1) / ITEMS_ON_SCREEN)}
                />
            </section>
        </div>
    );
}

export default Grid;
