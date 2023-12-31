export interface IWishItemServer {
    brand : string,
    product : {
        images : {
            mainImage : string
        }
        productTitle: string,
        percentageOfSale :  number | string
        percentageOfDiscount: number,
        price: string | number,
        status: string
    }
    isStock : boolean
    _id : string
}
