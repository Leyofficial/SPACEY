import style from "../ProductInfo/ProductInfo.module.scss";
import {Skeleton} from "@mui/material";
import payment1 from '../../../assets/img/payment/image 322.png'
import payment2 from '../../../assets/img/payment/image 323.png'
import payment3 from '../../../assets/img/payment/image 321.png'

const SkeletonProductDetail = () => {
    return (
        <>
            <header className={style.header}>

                <section className={style.titleWrapper}>
                    <section className={style.starWrapper}>
                        <Skeleton width={"100%"} height={55}></Skeleton>
                    </section>
                    <Skeleton width={"100%"} height={55}></Skeleton>
                </section>
                <Skeleton width={"100%"} height={55}></Skeleton>
                <section className={style.smallInfoWrapper}>
                    <Skeleton width={"100%"} height={55}></Skeleton>
                    <div className={style.blockSmallInfo}>
                        <Skeleton width={200} height={55}></Skeleton>
                        <Skeleton width={200} height={55}></Skeleton>
                    </div>
                    <div className={style.blockSmallInfo}>
                        <Skeleton width={200} height={55}></Skeleton>
                        <Skeleton width={200} height={55}></Skeleton>

                    </div>
                </section>

                <section className={style.priceWrapper}>
                    <Skeleton width={200} height={55}></Skeleton>
                    <Skeleton width={200} height={55}></Skeleton>
                </section>

            </header>
            <main>
                <section className={style.techWrapper}>
                    <div className={style.colorBlock}>
                        <Skeleton width={200} height={55}></Skeleton>
                        <div className={style.wrapperColor}>

                        </div>

                    </div>
                    <div className={style.sizeWrapper}>
                        <Skeleton width={200} height={55}></Skeleton>
                    </div>
                </section>
                <Skeleton width={200} height={55}></Skeleton>
                <section className={style.cardWrapper}>
                </section>

                <section className={style.servicesWrapper}>

                </section>

                <section className={style.guaranteWrapper}>
                    <p>100% Guarantee Safe Checkout</p>
                    <img src={payment1} alt={'payment'}/>
                    <img src={payment2} alt={'payment'}/>
                    <img src={payment3} alt={'payment'}/>
                </section>

            </main>
        </>
    );
};

export default SkeletonProductDetail;