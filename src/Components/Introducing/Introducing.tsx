import style from './Introducing.module.scss'
import IntroItem from "./IntroItem/IntroItem.tsx";

const Introducing = () => {
    return (
        <section className={style.container}>
            <IntroItem></IntroItem>
            <IntroItem></IntroItem>
        </section>
    );
};

export default Introducing;