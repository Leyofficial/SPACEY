export interface IBigDeal {
        brand: string,
        product: {
            sale : boolean,
            saleType: string,
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