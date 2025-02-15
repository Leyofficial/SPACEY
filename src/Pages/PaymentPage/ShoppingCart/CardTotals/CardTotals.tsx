import style from "./CardTotals.module.scss";
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import { useEffect, useState } from "react";
import { ICardTotalItems } from "../shoppingCartTypes.ts";
import { useAppSelector } from "../../../../redux/hooks/hooks.ts";

const CardTotals = ({ totalData }: ICardTotalItems) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (totalData) {
      const total = totalData.reduce((sum, item) => {
        return sum + Number(item.count) * Number(item.price);
      }, 0);
      setTotalPrice(Number(total));
    }
  }, [totalData]);

  const discount = totalPrice / 10;
  const tax = totalPrice / 50;
  const finalTotal = totalPrice - discount + tax;

  return (
    <section className={style.cardTotal}>
      <div className={style.wrapperInfo}>
        <h1>Card Totals</h1>
        <div className={style.info}>
          <p>
            <span>Sub total</span>${totalPrice.toFixed(2)}
          </p>
          <p>
            <span>Shipping</span>Free
          </p>
          <p>
            <span>Discount</span>${discount.toFixed(2)}
          </p>
          <p>
            <span>Tax</span>${tax.toFixed(2)}
          </p>
        </div>
        <div className={style.total}>
          <p>
            <span>Total</span>${finalTotal.toFixed(2)}
          </p>
        </div>
        <div className={style.btn}>
          <CustomBtn
            blockWidth={"18rem"}
            disable={!totalData}
            path={totalData ? `/payment-grid/${user?._id}` : "#"}
            text={"proceed to checkout"}
          />
        </div>
      </div>
    </section>
  );
};

export default CardTotals;
