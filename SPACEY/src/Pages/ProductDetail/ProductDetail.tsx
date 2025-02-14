import style from "./ProductDetail.module.scss";
import { useParams } from "react-router-dom";
import { UseCustomQuery } from "../../ApiRequests/customQuery/customQuery.ts";
import ProductInfo from "./ProductInfo/ProductInfo.tsx";
import ProductImagesSlider from "./ProductImagesSlider/ProductImagesSlider.tsx";
import FullWidthTabs from "../../Utility/CustomTabs/CustomTabs.tsx";
import { ITabItems, statusProductItems } from "./productDetail.ts";
import Description from "./Description/Description.tsx";
import StatusProduct from "../../Components/StatusProducts/StatusProduct/StatusProduct.tsx";
import Footer from "../../Components/Footer/Footer.tsx";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data } = UseCustomQuery(
    `https://spacey-server-two.vercel.app/api/${productId}`
  );
  const tabItems: ITabItems[] = [
    {
      tab: "DESCRIPTION",
      content: <Description data={data?.found} />,
    },
    {
      tab: "ADDITIONAL INFORMATION",
      content: "aditional",
    },
    {
      tab: "SPECIFICATION",
      content: "SPEC",
    },
    {
      tab: "REVIEW",
      content: "REVIEW",
    },
  ];

  return (
    <article className={style.container}>
      <main className={style.mainWrapper}>
        <section className={style.wrapper}>
          <ProductImagesSlider
            images={data?.found?.product.images}
          ></ProductImagesSlider>
          <ProductInfo product={data?.found}></ProductInfo>
        </section>
        <section className={style.tabsWrapper}>
          <FullWidthTabs tabItems={tabItems}></FullWidthTabs>
          <span className={style.lineUp}></span>
          <span className={style.lineBottom}></span>
        </section>
        <section className={style.statusProducts}>
          {statusProductItems.map((item: string, index: number) => (
            <StatusProduct key={index} title={item}></StatusProduct>
          ))}
        </section>
      </main>
      <Footer></Footer>
    </article>
  );
};

export default ProductDetail;
