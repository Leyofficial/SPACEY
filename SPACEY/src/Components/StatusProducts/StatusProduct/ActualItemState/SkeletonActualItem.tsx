import style from "./ActualItemState.module.scss";
import {Skeleton} from "@mui/material";

function SkeletonActualItem() {
    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
              <Skeleton variant={'rounded'} width={80} height={80}/>
            </div>
            <div className={style.textBlock}>
                <p className={style.titleWrapper}>
                    <Skeleton variant={'rounded'} width={80} height={20}/>
                </p>
                <p className={style.price}>
                    <Skeleton variant={'rounded'} width={40} height={20}/>
                </p>
            </div>
        </div>
    )
}
export default SkeletonActualItem