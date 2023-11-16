import style from './Footer.module.scss'
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import {useState} from "react";
import brand1 from '../../assets/img/google-2015 1.png'
import brand2 from '../../assets/img/samsung-4 1.png'
import brand3 from '../../assets/img/toshiba-1 1.png'
import brand4 from '../../assets/img/philips 1.png'
import brand5 from '../../assets/img/Frame.png'
import FooterItems from "./FooterItems/FooterItems.tsx";
import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";
import PopularTag from "./PopularTag/PopularTag.tsx";
import {quickLinks} from "./footerItem.ts";
import {useUniqueCategory} from "../../hooks/category/useUniqueCategory.ts";


const Footer = () => {
    const {data} = UseCustomQuery("https://spacey-server.vercel.app/api")
    const {filteredData} = useUniqueCategory(data)
    const [email, setEmail] = useState<string>("")
    const brandImages:string[] = [brand1, brand2, brand3, brand4, brand5]

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
                    {brandImages.map((brand:string,index:number) =>   <img key={index} src={brand} alt={'brand'}></img>)}
                </div>
            </section>
            <section className={style.footer}>
                <div className={style.wrapper}>
                    <div className={style.logo}>
                        <h1>SPACEY</h1>
                        <ul className={style.supportWrapper}>
                            <li className={style.titleSupport}>Customer Supports</li>
                            <li>(535)999-6699</li>
                        </ul>
                        <ul className={style.addressWrapper}>
                            <li>30311 London,Kentucky</li>
                            <li>Washington Ave,01355</li>
                        </ul>
                        <p className={style.email}>info@spacey.com</p>
                    </div>
                    <div className={style.topCategory}>
                        <FooterItems items={filteredData} title={'TOP CATEGORY'}></FooterItems>
                    </div>
                    <div>
                        <FooterItems items={quickLinks} title={'QUICK LINKS'}></FooterItems>
                    </div>
                    <div className={style.tags}>
                        <PopularTag></PopularTag>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;