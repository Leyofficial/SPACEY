import style from './PopperWindow.module.scss'
import {CircularProgress} from "@mui/material";
import {useEffect, useState} from "react";
import {IoIosArrowForward} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {UseCustomQuery} from "../../../../../ApiRequests/customQuery/customQuery.ts";
import PopperItem, {ICategory} from "../PopperItem/PopperItem.tsx";

function PopperWindow() {
    const navigate = useNavigate()
    const [filteredDate, setFiltered] = useState([]);
    const [hover, setHover] = useState<string | null>(null)
    const {isLoading, data} = UseCustomQuery("https://spacey-server.vercel.app/api")
    const {
        isLoading: isLoadingHoverItem,
        data: dataHoverItem
    } = UseCustomQuery(`https://spacey-server.vercel.app/api/product?category=${hover}`)

    function handleClick(call: string): void {
        navigate(call)
    }

    useEffect(() => {
        if (data) {

            const category = data.categories.map(((item: { categoryOfProduct: any; }) => item.categoryOfProduct))
            const uniqueCategories = category.filter((item: any, index: number): boolean => {
                return category.indexOf(item) === index;
            });
            setFiltered(uniqueCategories)

        }
    }, [data]);


    return (
        <div className={style.container}>
            <div className={style.block}>
                <div className={style.leftBlock}>
                    <div className={style.items}>
                        {isLoading ? <div className={style.loading}><CircularProgress/></div> :
                            filteredDate.map((item: any) => {
                                return <>
                                    {/*<div onMouseEnter={() => setHover(item)} onMouseLeave={() => setHover(null)}*/}
                                    <div onMouseEnter={() => setHover(item)}
                                         onClick={() => handleClick(item)} className={style.item}>{item}
                                        <IoIosArrowForward className={style.arrow}/>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
                <div className={style.rightBlock}>
                    <p>
                        The content of the Popper.
                        {dataHoverItem ? dataHoverItem?.foundProduct.slice(0,3).map((item: ICategory, index: number) => <PopperItem
                            key={index} item={item}></PopperItem>) : null}

                    </p>
                </div>
            </div>
        </div>
    )
}

export default PopperWindow