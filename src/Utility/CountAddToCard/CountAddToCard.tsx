import style from './CountAddToCard.module.scss'
import {FiMinus, FiPlus} from "react-icons/fi";

interface CountAddToCardProps{
    count:number,
    increase:(arg:number) => void,
    decrease:(arg:number) => void,
}
const CountAddToCard = ({count, decrease, increase}:CountAddToCardProps) => {
    return (
        <div className={style.count} style={{width:`40%`}}>
            <FiMinus onClick={decrease}/>
            <p>{count < 10 && count !== 0 ? "0" + count : count }</p>
            <FiPlus onClick={increase}/>
        </div>
    );
};

export default CountAddToCard;