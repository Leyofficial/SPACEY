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
            percentageOfSale: number,
            price: number
        }
    }
}