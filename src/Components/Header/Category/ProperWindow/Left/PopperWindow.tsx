import style from "./PopperWindow.module.scss";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UseCustomQuery } from "../../../../../ApiRequests/customQuery/customQuery.ts";
import PopperItem from "../PopperItem/PopperItem.tsx";
// import GetDiscountItem from "../../../../Discount/PopperDiscount/GetDiscountItem.tsx";
import { ICategory } from "../../../../../types.ts";
import { useUniqueCategory } from "../../../../../hooks/category/useUniqueCategory.ts";
import { CustomLocationCategory } from "../../../../../hooks/category/customLocationCategory.ts";

function PopperWindow({
  refHandler,
}: {
  refHandler: React.RefObject<HTMLDivElement>;
}) {
  const navigate = useNavigate();
  const [hover, setHover] = useState<string | null>(null);
  const [hoverBrand, setHoverBrand] = useState<string | null>(null);
  const [brands, setBrands] = useState<[] | string[]>([]);
  const { isLoading, data } = UseCustomQuery(
    "https://spacey-server-two.vercel.app/api"
  );
  const { data: dataHoverItem } = UseCustomQuery(
    `https://spacey-server-two.vercel.app/api/product?category=${hover}`
  );

  const { data: dataBrand } = UseCustomQuery(
    `https://spacey-server-two.vercel.app/api/product?category=${hover}&brand=${hoverBrand}`
  );

  const { filteredData } = useUniqueCategory(data);
  function handleClick(call: string): void {
    navigate("shop-grid");
    CustomLocationCategory("category", call, navigate);
  }

  useEffect(() => {
    if (dataHoverItem?.foundProduct) {
      const brandsArray: string[] = dataHoverItem.foundProduct.map(
        (item: ICategory) => item.brand
      );
      const uniqueBrands: string[] = [...new Set(brandsArray)];
      setBrands(uniqueBrands);
    }
  }, [dataHoverItem]);

  return (
    <div className={style.container}>
      <div className={style.block} ref={refHandler}>
        <div className={style.leftBlock}>
          <div className={style.items}>
            {isLoading ? (
              <div className={style.loading}>
                <CircularProgress />
              </div>
            ) : (
              filteredData.map((item: string) => {
                return (
                  <>
                    <div
                      onMouseEnter={() => setHover(item)}
                      onClick={() => handleClick(item)}
                      className={
                        hover === item ? style.activeHover : style.item
                      }
                    >
                      <p>{item}</p>
                      <IoIosArrowForward className={style.arrow} />
                    </div>
                  </>
                );
              })
            )}
          </div>
        </div>
        <div className={style.rightBlock}>
          <ul className={style.list}>
            {/*<li onMouseEnter={() => setHoverBrand('All')}>All</li>*/}
            {brands?.map((brand) => (
              <li
                className={hoverBrand === brand ? style.activeHover : ""}
                onMouseEnter={() => setHoverBrand(brand)}
              >
                {brand}
              </li>
            ))}
          </ul>
          <div className={style.brands}>
            {dataBrand
              ? dataBrand?.foundProduct
                  .slice(0, 3)
                  .map((item: ICategory, index: number) => (
                    <PopperItem key={index} item={item}></PopperItem>
                  ))
              : null}
          </div>
          {/* <GetDiscountItem
            idItem={"67b08aac412619000c61696c"}
          ></GetDiscountItem> */}
        </div>
      </div>
    </div>
  );
}

export default PopperWindow;
