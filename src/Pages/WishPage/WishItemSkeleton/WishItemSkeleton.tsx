import style from "../WishItem/WishItem.module.scss";
import {Skeleton} from "@mui/material";
import {CustomBtnCart} from "../../../Utility/CustomBtn/CustomBtn.tsx";
import {MdOutlineCancel} from "react-icons/md";

function WishItemSkeleton() {
    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                <Skeleton variant={'rounded'} width={80} height={60}/>
            </div>
            <div className={style.text}>
                <Skeleton height={30} variant={'rounded'}/>
            </div>
            <div className={style.price}>
                <p className={style.newPrice}><Skeleton variant={'rounded'} width={50} height={30}/></p>
            </div>
            <div className={style.status}>
                {/*{checkStock(foundProduct?.product?.stock)}*/}
                <Skeleton variant={'rounded'} height={50}/>
            </div>
            <div className={style.action}>
                <div className={style.btn}>
                    <CustomBtnCart text={'ADD TO CART'}/>
                </div>
                <div className={style.cancel}>
                    <MdOutlineCancel size={25} color={'#929FA5'}/>
                </div>
            </div>
        </div>
    )
}

export default WishItemSkeleton