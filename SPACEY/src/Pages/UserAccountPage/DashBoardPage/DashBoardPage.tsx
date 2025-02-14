import style from "./DashBoardPage.module.scss";
import { useAppSelector } from "../../../redux/hooks/hooks.ts";
import FormInfo from "./FormInfo/FormInfo.tsx";
import { Avatar, Skeleton } from "@mui/material";
import { OrderInfo } from "./OrderInfo/OrderInfo.tsx";
import CustomizedTables, { ICustomTable } from "./CustomTable/CustomTable.tsx";
import { ICategory } from "../../../types.ts";
import SmallDealItem from "../../MainPage/Deals/SmallDeal/SmallDealItem.tsx";
import React, { useEffect, useState } from "react";
import { getAllItems } from "../../../ApiRequests/Items/Items.ts";
import { CustomPagination } from "../../../Utility/Pagination/CustomPagination.tsx";
import { SkeletonSmallCall } from "../../HeaderPage/Addvertation/SmallAdd/SmallAddSkeleton.tsx";
import Card from "./Card/Card.tsx";
import axios from "axios";
import { ICardWrapper, IOrderInfo, IWholeInfo } from "./dashboardTypes.ts";
import { CiCreditCard1 } from "react-icons/ci";
import { orderInfo } from "./orderInfo.tsx";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import VerificateBanner from "./Verificate/VirificateBanner/VerificateBanner.tsx";
import { getImageFromServer } from "../../../ApiRequests/uploads/getImage.ts";

const ITEMS_ON_SCREEN = 4;

function DashBoardPage() {
  const { user } = useAppSelector((state) => state.user);
  const [wholeInfo, setWhole] = useState<IWholeInfo | null | any>(null);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [tableInfo, setTableInfo] = useState<ICustomTable[] | null>(null);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [imageFromServer, setImage] = useState<unknown | any>(null);
  const [loading, setIsLoading] = useState<boolean>();
  const indexOfLastCourse = page * ITEMS_ON_SCREEN;
  const indexOfFirstCourse = indexOfLastCourse - ITEMS_ON_SCREEN;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (!user || !user._id) return;
    axios
      .get(`https://spacey-server-two.vercel.app/processOrder/user/${user._id}`)
      .then((res) => {
        setWhole(res.data.foundOrders);
      });
    getAllItems().then((res) => {
      setItems(res.data.categories);
    });
    getImageFromServer(user.picture, setImage, setIsLoading);
    console.log(user);
  }, [user]);

  useEffect(() => {
    const tableInfo = wholeInfo?.map((item: IWholeInfo) => {
      const totalPrice = item.products.reduce(
        (acc, product) => acc + product.price,
        0
      );
      const totalProducts = item.products.length;
      return {
        orderId: item.orderId || "unknown",
        status: "In progress",
        date: item.date || "unknown",
        total: `$${totalPrice} (${totalProducts} Product/s)`,
        pathForLink: `/track-order/${item.orderId}`,
      };
    });
    setTableInfo(tableInfo);
  }, [wholeInfo]);

  useEffect(() => {
    const currentProducts = items.slice(indexOfFirstCourse, indexOfLastCourse);
    setCurrentProducts(currentProducts);
  }, [items, page]);

  return user ? (
    <div className={style.container}>
      {!user.isConfirm ? <VerificateBanner /> : null}
      <div className={style.headerBlock}>
        <h2 className={style.title}>Hello , {user.givenName}</h2>
        <p className={style.guideText}>
          From your account dashboard. you can easily check & view your{" "}
          <span>Recent Orders</span>, manage your{" "}
          <span>Shipping and Billing Addresses</span> and edit your{" "}
          <span>Password</span> and <span>Account Details.</span>
        </p>
      </div>
      <div className={style.tablesInfo}>
        <FormInfo text={"Account Info"}>
          <div className={style.avatarBlock}>
            <div className={style.avatar}>
              {imageFromServer && !loading ? (
                <Avatar src={imageFromServer} />
              ) : (
                <Avatar />
              )}
            </div>
            <div className={style.avatarText}>
              <h2>
                {user.givenName ? (
                  user.givenName + " " + user.familyName
                ) : (
                  <Skeleton variant={"rounded"} width={"7rem"} height={15} />
                )}
              </h2>
              <p>{user.locale || "unknown"}</p>
            </div>
          </div>
          <div className={style.otherContacts}>
            <div className={style.item}>
              <p>Email</p> :{" "}
              {user.email ? (
                <span>{user.email}</span>
              ) : (
                <Skeleton variant={"rounded"} width={"10rem"} />
              )}
            </div>
            <div className={style.item}>
              <p>Phone</p> :{" "}
              {!user ? <span>{user}</span> : <span>unknown</span>}
            </div>
          </div>
        </FormInfo>
        <FormInfo text={"Billing address"}>
          <div className={style.billingAddress}>
            <p className={style.name}>
              {user.givenName} {user.familyName}
            </p>
            <p className={style.billingText}>
              East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
              Flat No. 5D, Dhaka - 1200, Bangladesh
            </p>
          </div>
        </FormInfo>
        <div className={style.statsOrders}>
          {orderInfo.map((item: IOrderInfo) => (
            <OrderInfo
              background={item.background}
              numberOfOrders={item.numberOfOrders}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <div className={style.tableBlock}>
        <h2 className={style.tableTitle}>Recent Order</h2>
        <div className={style.table}>
          {tableInfo ? <CustomizedTables array={tableInfo} /> : null}
        </div>
      </div>
      <div className={style.cardBlock}>
        <h3 className={`${style.tableTitle} ${style.cardTitle}`}>
          <p>Payment Option</p>
          <NavLink
            className={style.addCard}
            to={"/user-account/dashboard/addCard"}
          >
            <p>Add Card</p>
            <FaArrowRightLong />
          </NavLink>
        </h3>
        <div className={style.card}>
          {user && user.cards.length > 0 ? (
            user.cards.map((item: ICardWrapper) => {
              if (item.number == "") return;
              const cardDate: ICardWrapper = {
                number: item.number,
                name: item.name,
                cvc: item.cvc,
                expiry: item.expiry,
                idCard: item._id,
              };
              return <Card cardData={cardDate} />;
            })
          ) : (
            <div className={style.emptyCards}>
              <p className={style.noCards}>No cards :(</p>
              <CiCreditCard1 fontSize={"2.2rem"} />
            </div>
          )}
        </div>
      </div>
      <div className={style.historyBlock}>
        <h2 className={style.historyTitle}>Browsing history</h2>
        <div className={style.historyItems}>
          {currentProducts.length > 0 ? (
            currentProducts.map((item: ICategory, index: number) => (
              <SmallDealItem key={index} item={item}></SmallDealItem>
            ))
          ) : (
            <div className={style.skeletonBlock}>
              {SkeletonSmallCall(ITEMS_ON_SCREEN)}
            </div>
          )}
        </div>
        <section className={style.pagination}>
          <CustomPagination
            callback={handleChange}
            page={page}
            count={Math.round((items.length + 1) / ITEMS_ON_SCREEN)}
          />
        </section>
      </div>
    </div>
  ) : null;
}

export default DashBoardPage;
