export interface IProductImagesSliderProps {
    images: {
        mainImage: string,
        restImages: [{
            images: [string],
            color: string
        }]
    }
}

export interface ISliderItemsProps {
    imageId: string
}