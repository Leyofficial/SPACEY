interface ICarousel {
    item : {
        brand : string,
        product : {
            images: {
                mainImage: string,
                restImages: {
                    images: [string],
                    color: string
                }
            },
        }
    }
}
const ProductCarouselItem = ({item} : ICarousel) => {
    return (
        <></>
    )
};

export default ProductCarouselItem