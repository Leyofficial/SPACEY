import style from './PopularTag.module.scss'
import {NavLink} from "react-router-dom";
import {tags} from "../footerItem.ts";

const PopularTag = () => {
    return (
        <div className={style.container}>
            <h3>POPULAR TAG</h3>
            <ul>
                {tags.map((tag:string,index:number ) => <NavLink to={`/}`}  key={index}>{tag}</NavLink>)}
            </ul>
        </div>
    );
};

export default PopularTag;