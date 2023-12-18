import style from './ProductInfo.module.scss'
import {addCartItem, IProductInfoProps} from "../productDetail.ts";
import {getRatingIcons} from "../../../Utility/Rating/getRating.tsx";
import CustomSelect from "../../../Utility/CustomSelect/CustomSelect.tsx";
import CountAddToCard from "../../../Utility/CountAddToCard/CountAddToCard.tsx";
import {useState} from "react";
import {CustomBtnCart} from "../../../Utility/CustomBtn/CustomBtn.tsx";
import {CiHeart} from "react-icons/ci";
import {MdOutlineChangeCircle} from "react-icons/md";
import payment1 from '../../../assets/img/payment/image 322.png'
import payment2 from '../../../assets/img/payment/image 323.png'
import payment3 from '../../../assets/img/payment/image 321.png'
import {getColorElement} from "../getColorElement.tsx";
import {useAppSelector} from "../../../redux/hooks/hooks.ts";
import {Toaster} from "react-hot-toast";
import SkeletonProductDetail from "../SkeletonProductDetail/SkeletonProductDetail.tsx";
import {useAddToWish} from "../../../hooks/wish/useAddToWish.ts";
import {successToaster} from "../../../Utility/ToasterActions/SuccessToaster.tsx";
import {errorToaster} from "../../../Utility/ToasterActions/ErrorToaster.tsx";


const ProductInfo = ({product}: IProductInfoProps) => {
    const [countAddProduct, setCountAddProduct] = useState<number>(1)
    const {user} = useAppSelector(state => state.user)
    const [process,setProcess] = useState<boolean>(false)
    const increaseProduct = () => {
        setCountAddProduct(countAddProduct + 1)
    }
    const decreaseProduct = () => {
        if (countAddProduct > 1)
            setCountAddProduct(countAddProduct - 1)
    }
  const addCartItemHandler = () => {
      const data: { idProduct: string, count: number, price: number | string } = {
          idProduct: product._id,
          count: countAddProduct,
          price: product.product.price
      }
      const userId = user?._id
      addCartItem({data, setProcess, userId})
  }

  const addToWishItem = () => {
        useAddToWish(user._id ,product._id).then((res) => {
            successToaster(res.data.message)
        }).catch((err) => {
            errorToaster(err.response.data.message)
        })
  }

    return (
        <article className={style.product}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            {!product ? <SkeletonProductDetail></SkeletonProductDetail> : <>
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
                        <p className={style.price}>${Number(product?.product.price) - (Number(product?.product.price) * (Number(product.product.percentageOfSale) / 100))}.00 <span>${product.product.price}.00</span>
                        </p>
                        <p className={style.discount}>{product?.product.percentageOfSale}% {product.product.saleType.toUpperCase()}</p>
                    </section>

                </header>
                <main>
                    <section className={style.techWrapper}>
                        <div className={style.colorBlock}>
                            <p>Color</p>
                            <div className={style.wrapperColor}>
                                {product?.product.images.restImages.map((item) => getColorElement(item.color.toUpperCase()))}
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
                        <CustomBtnCart inProcess={process} blockWidth={'100%'} text={'ADD TO CARD'} callback={addCartItemHandler}/>
                        <CustomBtnCart blockWidth={'40%'} typeBtn={'BUY'} text={"BUY NOW"}></CustomBtnCart>
                    </section>

                    <section className={style.servicesWrapper}>
                        <p onClick={() => addToWishItem()}><CiHeart/>Add to Wishlist</p>
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