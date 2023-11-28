import style from './ContactBlock.module.scss';
import {ReactNode} from "react";

interface IContactBlockProps {
    item: {
        title: string,
        icon: ReactNode,
        description: string,
        subject: string,
        btnTitle: string,
        color: string
    }
}

const ContactBlock = ({item}: IContactBlockProps) => {
    return (
        <div className={style.block}>
            <div className={`${style.iconWrapper} ${item.color === 'blue' ? style.blueIcon : style.greenIcon}`}>
                {item.icon}
            </div>
            <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <h3>{item.subject}</h3>
                <button className={`${style.btn} ${item.color === 'blue' ? style.blueBtn : style.greenBtn}`}>{item.btnTitle}</button>
            </div>
        </div>
    );
};

export default ContactBlock;