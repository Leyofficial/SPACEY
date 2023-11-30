import style from './FaqPage.module.scss'
import {faqQuestions} from "./FaqQuestions.ts";
import {FaqItem} from "../../Components/FaqItem/FaqItem.tsx";
import Footer from "../../Components/Footer/Footer.tsx";

function FaqPage() {
    return (
        <>
            <div className={style.block}>
                <h2 className={style.title}>
                    Frequently Asked Questions
                </h2>
                <div className={style.items}>
                    {faqQuestions.map((item) => {
                        return <FaqItem question={item.question} answer={item.answer} bulletPoints={item.bulletPoints}/>
                    })}
                </div>
            </div>
            <footer className={style.footer}>
                <Footer/>
            </footer>
        </>
    )
}

export default FaqPage