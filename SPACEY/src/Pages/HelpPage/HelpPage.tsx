import style from './HelpPage.module.scss';
import {IoSearch} from "react-icons/io5";
import help from '../../assets/img/help.png'
import {helpItems} from "./HelpItemsList.tsx";
import AssistItem from "./AssistItem/AssistItem.tsx";

const HelpPage = () => {
    return (
        <main className={style.container}>
            <header>
                <div className={style.header}>
                    <div className={style.headerInfo}>
                        <p className={style.tag}>HELP CENTER</p>
                        <h1>How we can help you?</h1>
                        <div className={style.searchWrapper}>
                            <IoSearch/>
                            <input placeholder={'Enter your question or keyword'}/>
                            <button>SEARCH</button>
                        </div>
                    </div>

                    <div className={style.headerImage}>
                        <img src={help} alt={'help'}/>
                    </div>
                </div>
            </header>

            <section className={style.assistWrapper}>
                <h1>What can we assist you with today?</h1>
                <div className={style.assistItems}>
                    {helpItems().map((item,index) => <AssistItem key={index} item={item}></AssistItem>)}
                </div>

            </section>
        </main>
    );
};

export default HelpPage;