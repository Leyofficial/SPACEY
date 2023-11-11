import style from "./BigAdd.module.scss";
import {Skeleton} from "@mui/material";
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
function BigAddSkeleton() {
    return (
        <>
            <div className={style.block}>
                <div className={style.textBlock}>
                    <Skeleton variant="rectangular" width={125} height={46} className={style.title}></Skeleton>
                    <CustomBtn/>
                </div>
                <div className={style.photoBlock}>
                    <Skeleton  variant="text" width={260} height={400}></Skeleton>
                </div>
            </div></>
    )
}
export default BigAddSkeleton