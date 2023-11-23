import style from "./DiscountItemSI.module.scss";
import {Skeleton} from "@mui/material";
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn.tsx";

function SkeletonDiscountItemSI() {
    return (
        <>
             <div className={`${style.block} ${style.skeletonBlock}`}>
                <div className={style.imgBlock}>
                    <Skeleton width={'200px'} height={'120px'} variant={'rounded'}/>
                </div>
                <div className={style.textBlock}>
                        <Skeleton className={style.title} width={'140px'} height={'30px'} variant={'rounded'}/>
                        <Skeleton className={style.description} variant="rounded" width={140} height={60} />
                    <div className={style.priceBlock}>
                        <p className={style.priceTitle}>Only for :</p>
                        <Skeleton className={style.price} variant="rounded" width={50} height={20} />USD
                    </div>
                </div>
                <div className={style.btn}>
                    <CustomBtn/>
                </div>
            </div>
        </>
    )
}
export default SkeletonDiscountItemSI