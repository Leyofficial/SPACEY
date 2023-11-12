import style from "./SmallDealItem.module.scss";
import {Skeleton} from "@mui/material";

function SmallDealSkeleton() {
    return (
        <div className={style.block}>
            <Skeleton className={style.skeletonType} variant="rounded" width={46} height={25} />
            <Skeleton className={style.imgSkeleton} variant={"rounded"} width={216} height={188}/>
            <Skeleton className={style.title} variant="rounded" width={46} height={20} />
            <div className={style.priceBlock}>
                <Skeleton variant="rounded" width={86} height={20} />
            </div>
        </div>
    )
}
export default SmallDealSkeleton