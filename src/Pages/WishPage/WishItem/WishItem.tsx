import style from './WishItem.module.scss'
import {checkNewPrice} from "../../MainPage/percentageFuncrion.ts";
import {CustomBtnCart} from "../../../Utility/CustomBtn/CustomBtn.tsx";
import {MdOutlineCancel} from "react-icons/md";
import {checkStock} from "../../../Utility/CheckStock/checkStock.tsx";
import {useEffect, useState} from "react";
import {getProduct} from "../../../ApiRequests/Items/getProduct.ts";
import {getImageFromServer} from "../../../ApiRequests/uploads/getImage.ts";
import {Skeleton} from "@mui/material";
import axios from "axios";
import {useAppSelector} from "../../../redux/hooks/hooks.ts";
import {IWishItemServer} from "../types.ts";
import toast, {Toaster} from "react-hot-toast";
import {addToCart} from "../../../Utility/ActionProduct/addToCart.ts";
import {useCheckInCart} from "../../../hooks/cart/useCheckInCart.ts";

interface IWishItem {
    id : string
}
function WishItem({id} : IWishItem) {

    const {user} = useAppSelector((state) => state.user);
    const [image , setImage] = useState<any | null>(null);
    const [ canceled , setCanceled] = useState<boolean>(false);
    const [foundProduct , setProduct] = useState<IWishItemServer | null>(null);
    const [inCart , setInCart] = useState<boolean>(false);
    // const {img, productTitle, percentageOfDiscount, price, status} = obj
    useEffect(() => {
        if (!id) return ;
        getProduct(id).then((res) => {
            setProduct(res.data.found);
           useCheckInCart( res.data.found._id , user._id)?.then((response) => {
                setInCart(response.data.isCart)
            });
        })
    },[])

    function handleDeleteItem() {
        if (!foundProduct) return
        axios.patch('https://spacey-server.vercel.app/wishList', {
            idUser: user._id,
            idItem: foundProduct._id
        }).then( () => {
            setCanceled(true)
        }).catch((err) => toast.error(err.message))
    }
    function handleAddToCart() {
        if (!inCart) {
            addToCart(user , foundProduct );
        } else {
            toast.error('It`s already in your cart!')
        }

    }

    useEffect(() => {
        if (!foundProduct) return
        getImageFromServer(foundProduct?.product?.images.mainImage , setImage);
    }, []);

    return (
        <div style={ canceled ? {display : 'none'} : {display : 'flex'}} className={style.block}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className={style.imgBlock}>
                {image ? <img src={image ? image : ''} alt='img'/> : <Skeleton variant={'rounded'} width={80} height={60}/> }
            </div>
            <div className={style.text}>
                {foundProduct?.brand}
            </div>
            <div className={style.price}>
                {+foundProduct?.product.percentageOfSale > 0 ? <p className={style.oldPrice}>
                    {foundProduct?.product.price}
                </p> : null}
                <p className={style.newPrice}>${checkNewPrice(foundProduct?.product.price, foundProduct?.product.percentageOfSale)}</p>
            </div>
            <div className={style.status}>
                {/*{checkStock(foundProduct?.product?.stock)}*/}
                {checkStock(foundProduct?.isStock)}
            </div>
            <div className={style.action}>
                <div onClick={handleAddToCart} className={style.btn}>
                    <CustomBtnCart background={ inCart ? '#ADB7BC' : '#FA8232'}  text={'ADD TO CART'}/>
                </div>
                <div onClick={handleDeleteItem} className={style.cancel}>
                    <MdOutlineCancel size={25} color={'#929FA5'}/>
                </div>
            </div>
        </div>
    )
}

export default WishItem