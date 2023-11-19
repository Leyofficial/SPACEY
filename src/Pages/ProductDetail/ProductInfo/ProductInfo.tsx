import style from './ProductInfo.module.scss'
import {IProductInfoProps} from "../productDetail.ts";
import {getRatingIcons} from "../../../Utility/Rating/getRating.tsx";
import CustomSelect from "../../../Utility/CustomSelect/CustomSelect.tsx";
import {Skeleton} from "@mui/material";
import CountAddToCard from "../../../Utility/CountAddToCard/CountAddToCard.tsx";
import {useState} from "react";
import {CustomBtnCart} from "../../../Utility/CustomBtn/CustomBtn.tsx";
import {CiHeart} from "react-icons/ci";
import {MdOutlineChangeCircle} from "react-icons/md";
import payment1 from '../../../assets/img/payment/image 322.png'
import payment2 from '../../../assets/img/payment/image 323.png'
import payment3 from '../../../assets/img/payment/image 321.png'



const ProductInfo = ({product}: IProductInfoProps) => {
    const [countAddProduct, setCountAddProduct] = useState<number>(1)
    const increaseProduct = () => {
        setCountAddProduct(countAddProduct + 1)
    }
    const decreaseProduct = () => {
        if (countAddProduct !== 0)
            setCountAddProduct(countAddProduct - 1)
    }
    return (
        <article className={style.product}>
            {!product ? <Skeleton></Skeleton> : <>
                <header className={style.header}>

                    <section className={style.titleWrapper}>
                        <section className={style.starWrapper}>
                            {getRatingIcons(product?.product.rating)}
                            <p>{product?.product.rating} Star Rating <span>(21,671 User feedback)</span></p>
                        </section>
                        <p className={style.title}>{product?.product.title}</p>
                    </section>

                    <section className={style.smallInfoWrapper}>
                        <div className={style.blockSmallInfo}>
                            <p><span>Sku :</span>A264671</p>
                            <p><span>Brand :</span>{product?.brand}</p>
                        </div>
                        <div className={style.blockSmallInfo}>
                            <p className={style.stock}><span>Availability:</span>In Stock</p>
                            <p><span>Category:</span>{product?.categoryOfProduct}</p>
                        </div>
                    </section>

                    <section className={style.priceWrapper}>
                        <p className={style.price}>${product?.product.price - (Number(product?.product.price) * (Number(product.product.percentageOfSale) / 100 ) )}.00 <span>${product.product.price}.00</span>
                        </p>
                        <p className={style.discount}>{product?.product.percentageOfSale}% {product.product.saleType.toUpperCase()}</p>
                    </section>

                </header>
                <main>
                    <section className={style.techWrapper}>
                        <div className={style.colorBlock}>
                            <p>Color</p>
                            <div className={style.wrapperColor}>
                                <p className={`${style.activeColor}`}><span className={`${style.color}`}></span></p>
                                <p><span className={style.color}></span></p>
                            </div>
                            <CustomSelect width={300} items={product.product.memory} title={'Memory'}></CustomSelect>
                        </div>
                        <div className={style.sizeWrapper}>
                            <CustomSelect width={300} items={product.product.size} title={'Size'}></CustomSelect>
                            <CustomSelect width={300} items={product.product.storage} title={'Storage'}></CustomSelect>
                        </div>
                    </section>

                    <section className={style.cardWrapper}>
                        <CountAddToCard decrease={decreaseProduct} increase={increaseProduct}
                                        count={countAddProduct}></CountAddToCard>
                        <CustomBtnCart blockWidth={'100%'} text={'ADD TO CARD'}/>
                        <CustomBtnCart blockWidth={'40%'} typeBtn={'BUY'} text={"BUY NOW"}></CustomBtnCart>
                    </section>

                    <section className={style.servicesWrapper}>
                        <p><CiHeart/>Add to Wishlist</p>
                        <p><MdOutlineChangeCircle/>Add to Compare</p>
                    </section>

                    <section className={style.guaranteWrapper}>
                        <p>100% Guarantee Safe Checkout</p>
                        <img src={payment1} alt={'payment'}/>
                        <img src={payment2} alt={'payment'}/>
                        <img src={payment3} alt={'payment'}/>
                    </section>

                </main>
            </>}
        </article>
    );
};

export default ProductInfo;