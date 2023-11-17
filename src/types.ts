export interface IProduct {
    description: string,
    images: {
        mainImage: string,
        restImages: {
            color: string,
            images: [string]
        }
    },
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
    title ? : string
    item  : ICategory
}
export interface ICategory {
    brand: string,
    categoryOfProduct: string,
    _id: string,
    product: IProduct
}