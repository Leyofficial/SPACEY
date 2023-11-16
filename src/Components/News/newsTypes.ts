interface IReviews{
    dateOfReview:string,
    review:string,
    reviewAuthor:string,
    _id:string

}
export interface INews {
    author:string,
    date:string,
    description:string,
    image:string,
    reviews:IReviews[],
    subtitle:string,
    title:string,
    _id:string
}