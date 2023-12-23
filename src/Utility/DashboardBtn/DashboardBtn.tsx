import {NavLink} from "react-router-dom";
import style from './DashboardBtn.module.scss'
import {LuLayoutDashboard} from "react-icons/lu";
const DashboardBtn = () => {
    return (
        <>
            <div className={style.btn}>
                <NavLink to={'/user-account/dashboard'}>
                    <LuLayoutDashboard /> GO TO DASHBOARD
                </NavLink>
            </div>

        </>
    );
};

export default DashboardBtn;