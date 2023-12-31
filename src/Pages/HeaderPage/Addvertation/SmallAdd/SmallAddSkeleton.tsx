import style from "./SmallAdd.module.scss";
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {Skeleton} from "@mui/material";
import SmallDealSkeleton from "../../../MainPage/Deals/SmallDeal/SmallDealSkeleton.tsx";

function SmallAddSkeleton() {
    return (
        <div className={style.block}>
            <div className={style.imgBlock}>
                <Skeleton  variant="text" width={124} height={124}></Skeleton>

            </div>
            <div className={style.textBlock}>
                <Skeleton   className={style.title} variant="text" width={60} height={40}></Skeleton>
                <Skeleton   className={style.title} variant="text" width={100} height={40}></Skeleton>
                <CustomBtn/>
            </div>
        </div>
    )
}
export default SmallAddSkeleton

export function SkeletonSmallCall(numSkeleton : number ) {
    return (
        <>
            {Array.from({ length: numSkeleton }, (_, index) => (
            <SmallDealSkeleton key={index} />
            ))}

        </>
    )
}