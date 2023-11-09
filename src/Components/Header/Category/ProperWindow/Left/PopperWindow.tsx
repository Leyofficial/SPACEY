import style from './PopperWindow.module.scss'
import {useQuery} from "react-query";
import {CircularProgress} from "@mui/material";
import {useEffect, useState} from "react";
import {IoIosArrowForward} from "react-icons/io";
import {useNavigate} from "react-router-dom";

function PopperWindow() {
    const navigate = useNavigate()
    const [filteredDate, setFiltered] = useState([]);
    const {isLoading, error, data} = useQuery('repoData', () =>
        fetch('https://spacey-server-1qkt.vercel.app').then(res =>
            res.json()
        )
    )

    function handleClick (call : string): void {
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
                    {isLoading ? <div className={style.loading} ><CircularProgress/></div> :
                        filteredDate.map((item: any) => {
                            return  <>
                                <div onClick={() => handleClick(item) } className={style.item}>{item}
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
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PopperWindow