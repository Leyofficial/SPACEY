export function checkNewPrice(price : number , percentage : number){
    if (price) {
        const discount = price * (percentage / 100);
        const newPrice = price - discount;
        return +Math.round(newPrice) || 0;
    }
}