import style from './Compare.module.scss'
import Table from "../../Utility/Table/Table.tsx";
function Compare() {
    const columns = ['Customer feedback' , 'Price' ,'Sold by' , 'Brand' , 'Model' , 'Stock status' , 'Size' , 'Wight']
    const data = [{
        rating: '5star',
        price : 100,
        soldBy : 'Spacey',
        brand : 'StarTech',
        model: 'iPhone 13',
        stockStatus:  'In Stock',
        size: '6.1 inches',
        weight : '194 grams',
    },
        {
            rating: '10star',
            price : 100,
            soldBy : 'Spacey',
            brand : 'StarTech',
            model: 'iPhone 13',
            stockStatus:  'In Stock',
            size: '6.1 inches',
            weight : '194 grams',
        }
    ];
    return (
        <div className={style.block}>
            <div className={style.table}>
                {columns.map((item) => {
                   return <Table column={item} data={data} />
                })}
            </div>
        </div>
    )
}
export default Compare