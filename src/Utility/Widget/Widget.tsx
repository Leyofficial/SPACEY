import style from './Widget.module.scss'
import {NavLink} from "react-router-dom";
import {FaArrowRightLong} from "react-icons/fa6";

export function Widget() {
    // const dataEvents = {
    //     monthStart : 10,
    //     monthEnd : 11,
    //     percentageDiscount : 59,
    //     nameEvent : ['Black' , 'Friday']
    // }
    // function checkBanner(){
    //     const date = new  Date();
    //     const month = date.getMonth();
    //     if (10 < month || month < 2)  {
    //
    //     }
    // };
    return (
        <div className={style.block}>
            <div className={style.wrapperBlock}>
                <div className={style.boxesBlock}>
                    <div className={style.box}>
                        Black
                    </div>
                    <div className={style.text}>
                        Friday
                    </div>
                </div>
                <div className={style.discountBlock}>
                    <p>Up to</p>
                    <h2 className={style.percentage}>59%</h2>
                    <h3>OFF</h3>
                </div>
                <div className={style.buttonBlock}>
                    <NavLink to={'/shop-grid'} className={style.link}>
                        <div className={style.wrapperButton}>
                            <h2 className={style.shopNow}>SHOP NOW</h2>
                            <FaArrowRightLong />
                        </div>
                    </NavLink>
                </div>
                {/*{checkBanner()}*/}
            </div>
        </div>
    )
}
