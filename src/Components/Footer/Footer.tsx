import style from './Footer.module.scss'
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import {useEffect, useState} from "react";
import brand1 from '../../assets/img/google-2015 1.png'
import brand2 from '../../assets/img/samsung-4 1.png'
import brand3 from '../../assets/img/toshiba-1 1.png'
import brand4 from '../../assets/img/philips 1.png'
import brand5 from '../../assets/img/Frame.png'
import FooterItems from "./FooterItems/FooterItems.tsx";
import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";

const Footer = () => {
    const {data} = UseCustomQuery("https://spacey-server.vercel.app/api")
    const [filteredDate, setFiltered] = useState<[] | [string]>([]);
    useEffect(() => {
        if (data) {

            const category = data.categories.map(((item: { categoryOfProduct: string; }) => item.categoryOfProduct))
            const uniqueCategories = category.filter((item: string, index: number): boolean => {
                return category.indexOf(item) === index;
            });
            setFiltered(uniqueCategories)

        }
    }, [data]);

    const [email, setEmail] = useState<string>("")
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
                <div className={style.wrapper}>
                    <div className={style.logo}>
                        <h1>SPACEY</h1>
                        <ul>
                            <li>Customer Supports</li>
                            <li>(535)999-6699</li>
                        </ul>
                        <ul>
                            <li>30311 London,Kentucky</li>
                            <li>Washington Ave,01355</li>
                        </ul>
                        <p>info@spacey.com</p>
                    </div>
                    <div className={style.topCategory}>
                        <FooterItems items={filteredDate} title={'TOP CATEGORY'}></FooterItems>

                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;