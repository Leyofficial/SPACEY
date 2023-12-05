import style from './Compare.module.scss'
import Table from "../../Utility/Table/Table.tsx";

function Compare() {
    const columns = [{
        text: 'Customer feedback',
        accessor: 'rating'
    },
        {
            text: 'Price',
            accessor: 'price'
        },
        {
            text: 'Sold by',
            accessor: 'soldBy'
        },
        {
            text: 'Brand',
            accessor: 'brand'
        },
        {
            text: 'Model',
            accessor: 'model'
        },
        {
            text: 'Stock status',
            accessor: 'stockStatus',
        },
        {text: 'Size', accessor: 'size'},
        {text: 'Weight', accessor: 'weight'},
    ]
    const data = [{
        rating: '5star',
        price: 100,
        soldBy: 'Spacey',
        brand: 'StarTech',
        model: 'iPhone 13',
        stockStatus: 'In Stock',
        size: '6.1 inches',
        weight: '194 grams',
    },
        {
            rating: '10star',
            price: 100,
            soldBy: 'Spacey',
            brand: 'StarTech',
            model: 'iPhone 13',
            stockStatus: 'In Stock',
            size: '6.1 inches',
            weight: '194 grams',
        }
    ];
    return (
        <div className={style.block}>
            <div className={style.table}>
                {columns.map((item) => {
                    return <Table column={item.text} accessor={item.accessor}  data={data}/>
                })}
            </div>
        </div>
    )
}

export default Compare