import style from './ListProducts.module.scss'
import {UseCustomQuery} from "../../../ApiRequests/customQuery/customQuery.ts";
import {BsArrowRightShort} from "react-icons/bs";
import {useUniqueCategory} from "../../../hooks/category/useUniqueCategory.ts";

interface IListProductsProps{
    typeCategory? : string,
    activeItem:string | null,
    callback:(arg:string) => void
}
const ListProducts = ({activeItem,callback,typeCategory } : IListProductsProps) => {

    const {data} = UseCustomQuery("https://spacey-server.vercel.app/api")

    const {filteredData} = useUniqueCategory(data,typeCategory)

    return (
        <nav className={style.container}>
            <ul>
                <li onClick={() => callback('All Product')} className={`${style.startLink} ${activeItem === 'All Product' ? style.activeItem : ""}`}>All Product</li>

                {filteredData.map((category,index:number) =>
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