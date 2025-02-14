import style from "./BigDealItem.module.scss";
import {Skeleton} from "@mui/material";

function BigDealSkeleton() {
    return (
        <div className={style.block}>
            <Skeleton className={style.skeletonType} variant="rounded" width={46} height={30} />
            <Skeleton className={style.imgSkeleton} variant={"rounded"} width={'100%'} height={268}/>
            <div className={style.ratingBlock}>
                <Skeleton variant="rounded" width={156} height={20} />
            </div>
            <Skeleton variant="rounded"  className={style.title} width={76} height={20} />
            <div className={style.priceBlock}>
                <Skeleton variant="rounded" width={176} height={20} />
            </div>
            <Skeleton  className={style.description} variant="rounded" width={256} height={100} />
            <div className={style.buttons}>
                <Skeleton variant="rounded" width={50} height={40} />
                <Skeleton variant="rounded" width={100} height={40} />
                <Skeleton variant="rounded" width={50} height={40} />
            </div>
        </div>
    )
}
export default BigDealSkeleton