import style from './ListProducts.module.scss'
import {useEffect, useState} from "react";
import {UseCustomQuery} from "../../../ApiRequests/customQuery/customQuery.ts";
import {BsArrowRightShort} from "react-icons/bs";
import {computerAcessories} from "../../../Pages/MainPage/ComputerAcessories/ComputerAcessories.ts";
import {useTypeCategory} from "../../../hooks/category/useTypeCategory.ts";

interface IListProductsProps{
    typeCategory ? : string,
    activeItem:string | null,
    callback:(arg:string) => void
}
const ListProducts = ({activeItem,callback , typeCategory} : IListProductsProps) => {
    const [categories, setCategories] = useState([])
    const {data} = UseCustomQuery("https://spacey-server.vercel.app/api")

    useEffect(() => {
        if (data) {
            const category = data.categories.map(((item: { categoryOfProduct: string; }) => item.categoryOfProduct))
            const uniqueCategories = category.filter((item: string, index: number): boolean => {
                return category.indexOf(item) === index;
            });
            if (typeCategory?.toLowerCase() === 'computer accessories' ) {
                useTypeCategory(uniqueCategories , computerAcessories , setCategories)
            } else {
                setCategories(uniqueCategories.slice(0,4))
            }
        }
    }, [data]);

    return (
        <nav className={style.container}>
            <ul>
                <li onClick={() => callback('All Product')} className={`${style.startLink} ${activeItem === 'All Product' ? style.activeItem : ""}`}>All Product</li>

                {categories.map((category,index:number) =>
                    <li onClick={() => callback(category)} className={activeItem === category ? style.activeItem : ""} key={index}>{category}
                    </li> ) }
                <li onClick={() => callback('Browse All Product')} className={`${style.endLink} ${activeItem === 'Browse All Product' ? style.activeItem : ""}`}>
                    Browse All Product <BsArrowRightShort>
                </BsArrowRightShort></li>
            </ul>
        </nav>
    );
};

export default ListProducts;