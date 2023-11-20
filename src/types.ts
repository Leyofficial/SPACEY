export interface IProduct {
    description: string,
    images: {
        mainImage: string,
        restImages: {
            color: string,
            images: [string]
        }
    },
    stateType : string[] | string,
    memory: [string],
    percentageOfSale: number,
    price: number,
    rating: number,
    sale: boolean,
    saleType: string,
    size: [string],
    storage: [string],
    title: string,
}
export interface IProductOutside  {
    title :any,
}
export interface ICategory {
    brand: string,
    categoryOfProduct: string,
    _id: string,
    product: IProduct
}

export interface IItem {
    item: {
        brand: string,
        product: {
            saleDescription: string,
            images: {
                mainImage:string,
                restImages:{
                    images:[string],
                    color:string
                }
            },
            stateType : string,
            percentageOfSale: number,
            price: number
        }
    }
}