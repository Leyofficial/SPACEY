import style from "./Addvertation.module.scss";
import BigAddSkeleton from "./BigAdd/BigAddSkeleton.tsx";
import SmallAddSkeleton from "./SmallAdd/SmallAddSkeleton.tsx";

export function AddverationSkeleton() {
    return (
        <div className={style.block}>
            <div className={style.blockWrapper}>
                <div className={style.skeletonBigAddWrapper}>
                <BigAddSkeleton/>
                </div>
                <div className={style.rightBlock}>
                    <SmallAddSkeleton/>
                    <SmallAddSkeleton/>
                </div>
            </div>
        </div>
    )
}