import style from './Description.module.scss'
import {ICategory} from "../../../types.ts";
import {TbFreeRights} from "react-icons/tb";
import {LiaShippingFastSolid} from "react-icons/lia";
import {FaMoneyBillTransfer} from "react-icons/fa6";
import {MdOutlinePayment, MdSupportAgent} from "react-icons/md";

interface IDescriptionProps {
    data: ICategory
}

const Description = ({data}: IDescriptionProps) => {

    return (
        <section className={style.description}>
            <div className={style.wrapperDescription}>
                <h3>Description</h3>
                <p>{data?.product?.description}</p>
            </div>
            <div>
                <p className={style.lineBlock}></p>
            </div>
            <div className={style.feature}>
                <h3>Feature</h3>
                <ul>
                    <li><TbFreeRights /> Free 1 Year Warranty</li>
                    <li><LiaShippingFastSolid />Free Shipping & Fasted Delivery</li>
                    <li><FaMoneyBillTransfer />100% Money-back guarantee</li>
                    <li><MdSupportAgent />24/7 Customer support</li>
                    <li><MdOutlinePayment />Secure payment method</li>
                </ul>
            </div>
            <div>
                <p className={style.lineBlock}></p>
            </div>

            <div className={style.shipping}>
                <h3>Shipping information</h3>
                <div className={style.shippingItems}>
                <p>Courier:<span> 2 - 4 days, free shipping</span></p>
                <p>Local Shipping:<span> up to one week, $19.00</span></p>
                <p>UPS Ground Shipping:<span> 4 - 6 days, $29.00</span></p>
                <p>Unishop Global Export:<span>3 - 4 days, $39.00</span></p>
                </div>
            </div>
        </section>
    );
};

export default Description;