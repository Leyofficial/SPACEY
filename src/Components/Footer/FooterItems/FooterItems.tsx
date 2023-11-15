import style from './FooterItems.module.scss';
import {useState} from "react";
import {NavLink} from "react-router-dom";

interface IFooterItemsProps{
    items:string[] | [],
    title:string,
}
const FooterItems = ({items,title}:IFooterItemsProps) => {
    const [hoverItem,setHoverItem] = useState<string>("")
    return (
        <div className={style.container}>
            <h4>{title}</h4>
            <ul>{items.slice(0,7).map((item:string,index:number) => <NavLink to={'/'} className={hoverItem === item ? style.activeItem : ""} onMouseEnter={() => setHoverItem(item)} key={index}><span></span>{item}</NavLink>)}
            </ul>
        </div>
    );
};

export default FooterItems;