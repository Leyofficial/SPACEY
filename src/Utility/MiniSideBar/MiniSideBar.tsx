import style from './MiniSideBar.module.scss'
import {CustomTabItem, ICustomTabItem} from "./CustomTabItem/CustomTabItem.tsx";

interface IMiniSideBar {
    tabItems : ICustomTabItem[]
}
function MiniSideBar({tabItems} : IMiniSideBar) {
    return (
        <div className={style.block}>
            <div className={style.links}>
                {tabItems.map((item : ICustomTabItem) =>
                   <CustomTabItem text={item.text} path={item.path} icon={item.icon}/>
                )}
                {/*Добавить окно с прощанием пользователя */}
            </div>
        </div>
    )
}

export default MiniSideBar