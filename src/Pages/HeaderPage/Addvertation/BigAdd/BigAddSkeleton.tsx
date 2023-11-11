import style from "./BigAdd.module.scss";
import {BsArrowRightShort} from "react-icons/bs";
import {Skeleton} from "@mui/material";
function BigAddSkeleton() {
    return (
        <>
            <div className={style.block}>
                <div className={style.textBlock}>
                    <Skeleton variant="rectangular" width={200} height={26} className={style.title}></Skeleton>
                    <Skeleton variant="rectangular" width={250} height={46} className={style.title}></Skeleton>
                    <button className={style.btn}>
                        <p className={style.btnText}>Shop Now</p>
                        <BsArrowRightShort color={'white'} size={30}/>
                    </button>
                </div>
                <div className={style.photoBlock}>
                    <Skeleton  variant="text" width={260} height={400}></Skeleton>
                    <Skeleton variant="circular" width={20} height={12} className={style.price}></Skeleton>
                </div>
            </div></>
    )
}
export default BigAddSkeleton