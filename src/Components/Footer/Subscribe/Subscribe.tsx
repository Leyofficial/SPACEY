import style from "./Subscribe.module.scss";
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn.tsx";
import {useState} from "react";
import {brandImages} from "./brandList.ts";

const Subscribe = () => {
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