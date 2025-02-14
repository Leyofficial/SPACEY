export interface IPricesRange {
    minPrice : number ,
    maxPrice : number,
    text : string,
}
export const pricesRangeData : IPricesRange[] = [
    { minPrice: 0, maxPrice: 10000, text: 'All Price' },
    { minPrice: 0, maxPrice: 20, text: 'Under $20' },
    { minPrice: 25, maxPrice: 100, text: '$25 to $100' },
    { minPrice: 100, maxPrice: 300, text: '$100 to $300' },
    { minPrice: 300, maxPrice: 500, text: '$300 to $500' },
    { minPrice: 500, maxPrice: 1000, text: '$500 to $1,000' },
    { minPrice: 1000, maxPrice: 10000, text: '$1,000 to $10,000' }
];
