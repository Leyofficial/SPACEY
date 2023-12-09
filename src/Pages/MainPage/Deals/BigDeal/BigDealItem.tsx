import {IBigDealItem,} from "../../types.ts";
import style from './BigDealItem.module.scss'
import {useEffect, useState} from "react";
import {getImageFromServer} from "../../../../ApiRequests/uploads/getImage.ts";
import {CustomSaleType} from "../../../../Utility/CustomSaleType/CustomSaleType.tsx";
import {checkNewPrice} from "../../percentageFuncrion.ts";
import {CustomIconButton} from "../../../../Utility/CustomIconButton/CustomIconButton.tsx";
import {MdFavoriteBorder} from "react-icons/md";
import {CustomBtnCart} from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {AiOutlineEye} from "react-icons/ai";
import {Rating, Skeleton} from "@mui/material";
import {addToCart} from "../../../../Utility/ActionProduct/addToCart.ts";
import {useAppSelector} from "../../../../redux/hooks/hooks.ts";
import {addToWist} from "../../../../Utility/ActionProduct/addToWish.ts";

function BigDealItem({item}: IBigDealItem) {
    const {user} = useAppSelector((state) => state.user);
    const [image, setImage] = useState<string | null>(null)
    useEffect(() => {
        if (item) {
            getImageFromServer(item?.product.images.mainImage, setImage)
        }
    }, [item])
    function handleAddToCart() {
        if (!item && !user) return;
        addToCart(user, item)
    }
    function handleAddToFavorite() {
        if (!item && !user) return;
        addToWist(user._id, item._id);
    }

    return (
        <div className={style.block}>
            <CustomSaleType typeSale={item?.product.saleType} />
            {image ? <img className={style.image} src={image ? image : ''} alt=""/> : <Skeleton className={style.imgSkeleton} variant={"rounded"} width={280} height={268}/>  }
                    <>
                        <Rating name="read-only" value={item ? item.product.rating : 1} readOnly />
                    </>
                {item?.product.numberOfRatings ? <p className={style.numRating}>({item?.product.numberOfRatings})</p> : null}
            <p className={style.title}>{item?.brand}</p>
            {item?.product.sale ?
                <div className={style.priceBlock}>
                    <p className={style.oldPrice}>${item?.product.price}</p>
                    <p className={style.newPrice}>${checkNewPrice(item?.product.price, 20)}</p>
                </div>
                : null}
            <p className={style.description}>{item?.product.description}</p>
            <div className={style.buttons}>
                <div onClick={handleAddToFavorite} className={style.favorite}>
                    <CustomIconButton icon={<MdFavoriteBorder size={24} color={'black'}/>}/>
                </div>
                <div onClick={handleAddToCart} className={style.cart}>
                    <CustomBtnCart/>
                </div>
                <CustomIconButton icon={<AiOutlineEye size={24} color={'black'} />} />
            </div>
        </div>
    )
}
export default BigDealItem