export function checkNewPrice(price: string | number | any, percentage: number | string | any){
    if (price) {
        const discount = +price * (percentage / 100);
        const newPrice = +price - discount;
        return +Math.round(newPrice) || 0;
    }
}