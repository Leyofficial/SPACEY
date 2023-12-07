export interface IWishItemServer {
    brand : string,
    product : {
        images : {
            mainImage : string
        }
        productTitle: string,
        percentageOfSale :  number | string | any
        percentageOfDiscount: number,
        price: string | number,
        status: string
    }
    _id : string
}
