import style from './Footer.module.scss'
import FooterItems from "./FooterItems/FooterItems.tsx";
import {UseCustomQuery} from "../../ApiRequests/customQuery/customQuery.ts";
import PopularTag from "./PopularTag/PopularTag.tsx";
import {quickLinks} from "./footerItem.ts";
import {useUniqueCategory} from "../../hooks/category/useUniqueCategory.ts";


const Footer = () => {
    const {data} = UseCustomQuery("https://spacey-server.vercel.app/api")
    const {filteredData} = useUniqueCategory(data)

    return (
        <footer className={style.container}>
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