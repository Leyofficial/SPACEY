import style from "./Subscribe.module.scss";
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn.tsx";
import brand1 from "../../../assets/img/google-2015 1.png";
import brand2 from "../../../assets/img/samsung-4 1.png";
import brand3 from "../../../assets/img/toshiba-1 1.png";
import brand4 from "../../../assets/img/philips 1.png";
import brand5 from "../../../assets/img/Frame.png";
import {useState} from "react";

const Subscribe = () => {
    const brandImages:string[] = [brand1, brand2, brand3, brand4, brand5]
    const [email, setEmail] = useState<string>("")
    return (
    <section className={style.subscribe}>
        <h1>Subscribe to our newsletter</h1>
        <p className={style.description}>We will share with you our new products.You will be able
            to buy them almost for free.
        </p>
        <form>
            <div className={style.inputWrapper}>
                <input placeholder={'Email address'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <CustomBtn text={"SUBSCRIBE"}></CustomBtn>
            </div>
        </form>
        <span className={style.line}></span>
        <div className={style.brands}>
            {brandImages.map((brand: string, index: number) => <img key={index} src={brand} alt={'brand'}></img>)}
        </div>
    </section>
    )
}
export default Subscribe