import style from './ListProducts.module.scss'
import {useEffect, useState} from "react";
import {UseCustomQuery} from "../../../ApiRequests/customQuery/customQuery.ts";

const ListProducts = () => {
    const [categories, setCategories] = useState([])
    const {data} = UseCustomQuery("https://spacey-server.vercel.app/api")

    useEffect(() => {
        if (data) {

            const category = data.categories.map(((item: { categoryOfProduct: string; }) => item.categoryOfProduct))
            const uniqueCategories = category.filter((item: string, index: number): boolean => {
                return category.indexOf(item) === index;
            });
            setCategories(uniqueCategories.slice(0,4))

        }
    }, [data]);

    return (
        <nav className={style.container}>
            <ul>
                <li className={style.startLink}>All Product</li>
                {categories.map((category,index:number) => <li key={index}>{category}</li> ) }
                <li className={style.endLink}>Browse All Product</li>
            </ul>
        </nav>
    );
};

export default ListProducts;