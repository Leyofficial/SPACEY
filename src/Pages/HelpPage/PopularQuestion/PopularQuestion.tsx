import style from './PopularQuestion.module.scss';
import {popularQuestions} from "../HelpListItems.ts";

const PopularQuestions = () => {
    return (
        <div className={style.container}>
            <ul>
                {popularQuestions.map((question,index) => <li key={index}>{question}</li>)}
            </ul>
        </div>
    );
};

export default PopularQuestions;