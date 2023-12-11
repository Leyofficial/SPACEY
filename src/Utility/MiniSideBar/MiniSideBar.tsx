import style from './MiniSideBar.module.scss'
import {GoGear, GoSignOut, GoStack} from "react-icons/go";
import {CustomTabItem} from "./CustomTabItem/CustomTabItem.tsx";

function MiniSideBar() {
    return (
        <div className={style.block}>
            <div className={style.links}>
                <CustomTabItem text={'Dashboard'} path={'/user-account/dashboard'} icon={<GoStack size={'1.25rem'}/>}/>
                <CustomTabItem text={'Settings'} path={'/user-account/settings'} icon={<GoGear size={'1.25rem'} />}/>
                <CustomTabItem text={'Log out'} path={'/user-account/logout'} icon={<GoSignOut  size={'1.25rem'}/>}/>
                {/*Добавить окошко с прощанием пользователя */}
            </div>
        </div>
    )
}

export default MiniSideBar