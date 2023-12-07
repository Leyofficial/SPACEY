import style from './SmallDealItem.module.scss'
import { IBigDealItem, ISmallDeal} from "../../types.ts";
import {Skeleton} from "@mui/material";
import {CustomSaleType} from "../../../../Utility/CustomSaleType/CustomSaleType.tsx";
import {checkNewPrice} from "../../percentageFuncrion.ts";
import {CustomIconButton} from "../../../../Utility/CustomIconButton/CustomIconButton.tsx";
import {MdFavoriteBorder} from "react-icons/md";
import {PiBasket} from "react-icons/pi";
import {AiOutlineEye} from "react-icons/ai";
import {useGetImage} from "../../../../hooks/getImage/useGetImage.ts";
import {NavLink} from "react-router-dom";
import {useAddToWish} from "../../../../hooks/wish/useAddToWish.ts";
import {useAppSelector} from "../../../../redux/hooks/hooks.ts";
import toast, {Toaster} from "react-hot-toast";
import {useAddToCart} from "../../../../hooks/cart/useAddToCart.ts";

function SmallDealItem({item}: ISmallDeal | IBigDealItem | any) {
    const {user} = useAppSelector((state) => state.user)
    const {image} = useGetImage(item.product.images.mainImage);
    function addToWist() {
        if (!item && !user) return
        toast.success('Product added to your wish!')
      useAddToWish(user._id , item._id).catch((err) => {
            toast.error(err)
      } );
    }
    function addToCart() {
        if (!item && !user) return
        toast.success('Product added to your cart!');
        useAddToCart(user._id , item._id).catch((err) => {
            toast.error(err)
        })
    }

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        <div className={style.block}>
            <NavLink className={style.link} to={`/product/${item._id}`}>
            <div className={style.cover}></div>
            <CustomSaleType typeSale={item?.product.saleType}/>
            {image ? <img className={style.image} src={image ? image : ''} alt=""/> :
                <Skeleton className={style.imgSkeleton} variant={"rounded"} width={216} height={188}/>}

            <p className={style.title}>{item?.brand}</p>
            {item?.product.sale ?
                <div className={style.priceBlock}>
                    <p className={style.oldPrice}>${item?.product.price}</p>
                    <p className={style.newPrice}>${checkNewPrice(item?.product.price, item?.product.percentageOfSale)}</p>
                </div>
                : null}
            <div className={style.iconsBlock}>
                <div className={style.wrapperBlock}>
                    <CustomIconButton callback={addToWist}  shaped={true} icon={<MdFavoriteBorder size={30} color={'black'}/>}/>
                    <CustomIconButton callback={addToCart} shaped={true} icon={<PiBasket color={'black'} size={30}/>}/>
                    <CustomIconButton shaped={true} icon={<AiOutlineEye size={30} color={'black'}/>}/>
                </div>
            </div>
            </NavLink>
        </div>
        </>
    )
}

export default SmallDealItem