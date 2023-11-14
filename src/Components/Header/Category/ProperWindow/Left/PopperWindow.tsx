import style from './PopperWindow.module.scss'
import {CircularProgress} from "@mui/material";
import {useEffect, useState} from "react";
import {IoIosArrowForward} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {UseCustomQuery} from "../../../../../ApiRequests/customQuery/customQuery.ts";
import PopperItem, {ICategory} from "../PopperItem/PopperItem.tsx";
import GetDiscountItem from "../../../../Discount/GetDiscountItem.tsx";

function PopperWindow() {
    const navigate = useNavigate()
    const [filteredDate, setFiltered] = useState([]);
    const [hover, setHover] = useState<string | null>(null)
    const [hoverBrand, setHoverBrand] = useState<string | null>(null)
    const [brands, setBrands] = useState<[] | string[]>([])
    const {isLoading, data} = UseCustomQuery("https://spacey-server.vercel.app/api")
    const {
        data: dataHoverItem
    } = UseCustomQuery(`https://spacey-server.vercel.app/api/product?category=${hover}`)

    const {data: dataBrand} = UseCustomQuery(`https://spacey-server.vercel.app/api/product?category=${hover}&brand=${hoverBrand}`)

    function handleClick(call: string): void {
        navigate(call)
    }

    useEffect(() => {
        if (data) {

            const category = data.categories.map(((item: { categoryOfProduct: string; }) => item.categoryOfProduct))
            const uniqueCategories = category.filter((item: string, index: number): boolean => {
                return category.indexOf(item) === index;
            });
            setFiltered(uniqueCategories)

        }
    }, [data]);


    useEffect(() => {
        if (dataHoverItem?.foundProduct) {
            const brandsArray:string[] = dataHoverItem.foundProduct.map((item : ICategory) => item.brand);
            const uniqueBrands:string[]  = [...new Set(brandsArray)];
            setBrands(uniqueBrands);
        }
    }, [dataHoverItem])

    return (
        <div className={style.container}>
            <div className={style.block}>
                <div className={style.leftBlock}>
                    <div className={style.items}>
                        {isLoading ? <div className={style.loading}><CircularProgress/></div> :
                            filteredDate.map((item: string) => {
                                return <>
                                    {/*<div onMouseEnter={() => setHover(item)} onMouseLeave={() => setHover(null)}*/}
                                    <div onMouseEnter={() => setHover(item)}
                                         onClick={() => handleClick(item)}
                                         className={hover === item ? style.activeHover : style.item}><p>{item}</p>
                                        <IoIosArrowForward className={style.arrow}/>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
                <div className={style.rightBlock}>
                    <ul className={style.list}>
                        <li onMouseEnter={() => setHoverBrand('All')}>All</li>
                        {brands?.map(brand => <li className={hoverBrand === brand ? style.activeHover : ""}
                                                  onMouseEnter={() => setHoverBrand(brand)}>{brand}</li>)}
                    </ul>
                    <div className={style.brands}>
                        {dataBrand ? dataBrand?.foundProduct.slice(0, 3).map((item: ICategory, index: number) =>
                            <PopperItem
                                key={index} item={item}></PopperItem>) : null}
                    </div>
                    <GetDiscountItem idItem={'654c8b0d3db7ae35800ccc40'}></GetDiscountItem>
                </div>
            </div>
        </div>
    )
}

export default PopperWindow