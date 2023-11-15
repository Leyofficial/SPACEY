import style from './Footer.module.scss'
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import {useState} from "react";
import brand1 from '../../assets/img/google-2015 1.png'
import brand2 from '../../assets/img/samsung-4 1.png'
import brand3 from '../../assets/img/toshiba-1 1.png'
import brand4 from '../../assets/img/philips 1.png'
import brand5 from '../../assets/img/Frame.png'
const Footer = () => {

    const [email,setEmail] = useState<string>("")
    return (
        <footer className={style.container}>
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
                    <img src={brand1} alt={'brand'}></img>
                    <img src={brand5} alt={'brand'}></img>
                    <img src={brand4} alt={'brand'}></img>
                    <img src={brand3} alt={'brand'}></img>
                    <img src={brand2} alt={'brand'}></img>
                </div>
            </section>
            <section className={style.footer}>

            </section>
        </footer>
    );
};

export default Footer;