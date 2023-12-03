import style from './TrackOrderStatus.module.scss'
import BreadCrumb from "../../../Components/BreadCrumb/BreadCrumb.tsx";
import {Outlet} from "react-router-dom";

function TrackOrderStatus() {
    return (
       <div className={style.block}>
           <div className={style.breadCrumb}>
               <BreadCrumb/>
           </div>
           <div className={style.block}>
               <Outlet/>
           </div>
       </div>
    )
}
export default TrackOrderStatus