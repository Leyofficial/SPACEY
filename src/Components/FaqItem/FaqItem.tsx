import style from './FaqItem.module.scss'
import {useState} from "react";
import {IoIosAdd} from "react-icons/io";
import {RiSubtractFill} from "react-icons/ri";
interface IFaqItem {
    question : string,
    answer : string,
    bulletPoints : string[],
}
export function FaqItem({question , answer , bulletPoints} : IFaqItem) {
    const [isClicked , setClicked ]  = useState<boolean>(false)
    return (
        <div className={style.block}>
            <div onClick={() => setClicked(!isClicked)} className={`${style.questionBlock} ${isClicked ? style.activeBlock : ''}`}>
                <p className={style.titleQuestion} style={{ color: isClicked ? 'white' : 'black' }}>
                    {question}
                </p>
                <div className={style.buttonBlock}>
                    {isClicked ? <RiSubtractFill size={20} color={'white'} /> : <IoIosAdd size={20} color={'gray'} />}
                </div>
            </div>
            <div className={`${style.subtitleBlock} ${isClicked ? style.activeSubtitle : ''}`}>
                {isClicked && <p>{answer}</p>}
                <ul className={style.listBollet}>
                    {bulletPoints.map((item) => {
                        return <li className={style.bullet}>
                            {item}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}