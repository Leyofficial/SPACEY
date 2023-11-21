import style from './PopularTags.module.scss';
import {popularTags} from "../../Utility/Lists.ts";

interface IPopularTagsProps{
    activeTag:string | null,
    callback:(arg:string) => void
}
const PopularTags = ({activeTag,callback} : IPopularTagsProps) => {

    return (
        <section className={style.container}>
            <h2>POPULAR TAG</h2>
            <div className={style.tagsWrapper}>
                <ul>
                {popularTags.map((tag:string,index:number) => <li onClick={() => callback(tag)} className={activeTag === tag ? style.activeClassTag : ""} key={index}>{tag}</li>)}
                </ul>
            </div>
        </section>
    );
};

export default PopularTags;