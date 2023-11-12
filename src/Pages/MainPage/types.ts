export interface IBigDealItem {
    item : IBigDeal
}
export interface IBigDeal {
        brand: string,
        product: {
            description : string,
            sale : boolean,
            saleType: string,
            rating : number,
            numberOfRatings : number,
            images: {
                mainImage: string,
                restImages: {
                    images: [string],
                    color: string
                }
            },
            percentageOfSale: number,
            price: number
        }
}

export interface ISmallDeal {
    item: {
        brand: string
        product: {
            sale : boolean,
            percentageOfSale: number,
            price: number,
            saleType : string
            images: {
                mainImage: string,
                restImages: {
                    images: [string],
                    color: string
                }
            }
        }
    }
}