import style from './ProductDetail.module.scss'
import {useParams} from "react-router-dom";
import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";
import ProductInfo from "./ProductInfo/ProductInfo.tsx";
import ProductImagesSlider from "./ProductImagesSlider/ProductImagesSlider.tsx";

const ProductDetail = () => {

    const {productId} = useParams()

    const {data} = UseCustomQuery(`https://spacey-server.vercel.app/api/${productId}`)



    return (
        <article className={style.container}>
            <main className={style.mainWrapper}>
                <section className={style.wrapper}>
                    <ProductImagesSlider images={data?.found?.product.images}></ProductImagesSlider>
                    <ProductInfo></ProductInfo>
                </section>
                <section></section>
            </main>

        </article>
    );
};

export default ProductDetail;