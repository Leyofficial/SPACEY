import {ReactNode} from 'react';
import style from './AssistItem.module.scss'
interface AssistItemProps{
    item: {title : string,icon:ReactNode}
}
const AssistItem = ({item}:AssistItemProps) => {

    return (
        <div className={style.container}>
            {item.icon}
            <p>{item.title}</p>

        </div>
    );
};

export default AssistItem;