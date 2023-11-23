import style from './AboutUs.module.scss';
import {IoCheckmarkDone} from "react-icons/io5";
import imageAbout from '../../assets/background/aboutImage.png'

const AboutUs = () => {
    return (
        <article className={style.container}>
            <main className={style.main}>
                <section className={style.introduction}>
                    <div className={style.textWrapper}>
                        <p className={style.tag}>WHO WE ARE</p>
                        <h1>Spacey - largest electronics retail shop in world</h1>
                        <p className={style.description}>With great respect for the identity that helped establish DigiKey across the globe,
                            we are reimagining and refreshing our logo and our branding.
                            The unique new look and tone have been designed to emphasize our ongoing connection with
                            suppliers and customers,
                            while reflecting DigiKey’s digital-first, forward-looking perspective.
                        </p>

                        <ul>
                            <li><IoCheckmarkDone/>Great 24/7 customer services</li>
                            <li><IoCheckmarkDone/>600+ Dedicated employee</li>
                            <li><IoCheckmarkDone/>50+ Branches all over the world</li>
                            <li><IoCheckmarkDone/>Over 1 Million Electronics Products</li>
                        </ul>
                    </div>
                    <div className={style.imageWrapper}>
                        <img src={imageAbout} alt={'about'}/>
                    </div>
                </section>
                <section className={style.team}>

                </section>
                <section className={style.movie}>

                </section>

            </main>
            <footer>

            </footer>
        </article>
    );
};

export default AboutUs;