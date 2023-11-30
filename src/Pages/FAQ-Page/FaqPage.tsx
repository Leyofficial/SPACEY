import style from './FaqPage.module.scss'
import {faqQuestions} from "./FaqQuestions.ts";
import {FaqItem} from "../../Components/FaqItem/FaqItem.tsx";
function FaqPage() {
    return (
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
    )
}
export default FaqPage