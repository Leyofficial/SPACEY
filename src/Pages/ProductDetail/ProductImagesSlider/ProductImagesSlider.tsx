import style from './ProductImagesSlider.module.scss'

interface IProductImagesSliderProps{
    images: {
        mainImage: string,
        restImages: [{
            images: [string],
            color: string
        }]
    }
}
const ProductImagesSlider = ({images} : IProductImagesSliderProps) => {

    console.log(images)
    return (
        <div className={style.slider}>

        </div>
    );
};

export default ProductImagesSlider;