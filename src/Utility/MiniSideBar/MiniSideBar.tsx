import style from './MiniSideBar.module.scss'
import {NavLink} from "react-router-dom";
import {GoGear, GoSignOut, GoStack} from "react-icons/go";

function MiniSideBar() {
    return (
        <div className={style.block}>
            <div className={style.links}>
                <div className={style.linkItem}><NavLink
                    className={({isActive}) =>
                        isActive ? "activeLinkSidebar" : ""
                    }
                    to={`/user-account/dashboard`}
                >
                    <div><GoStack size={'1.25rem'}/></div>
                    <div>
                        Dashboard
                    </div>

                </NavLink>
                </div>
                <div className={style.linkItem}><NavLink
                    className={({isActive}) =>
                        isActive ? "activeLinkSidebar" : ""
                    }
                    to={`/user-account/settings`}
                >
                    <div>
                        <GoGear size={'1.25rem'}/>
                    </div>
                    <div>
                        Setting
                    </div>

                </NavLink>
                </div>
                <div className={style.linkItem}><NavLink
                    className={({isActive}) =>
                        isActive ? "activeLinkSidebar" : ""
                    }
                    to={`/user-account/settings`}
                >
                    <div>
                        <GoSignOut  size={'1.25rem'}/>
                    </div>
                    <div>
                        Log out
                    </div>

                </NavLink>
                </div>

            </div>
        </div>
    )
}

export default MiniSideBar