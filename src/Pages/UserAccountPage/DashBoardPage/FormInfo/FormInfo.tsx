import style from './FormInfo.module.scss'
import React from "react";
import {NavLink} from "react-router-dom";

function FormInfo({ text, children }: { text: string; children: React.ReactNode }) {
    const lineStyle: React.CSSProperties = {
        borderBottom: `1px solid #E4E7E9`,
        width: '100%', // Ширина линии будет равна ширине родительского контейнера
    };
    return (
        <section className={style.block}>
            <header className={style.header}>{text}</header>
            <span style={lineStyle}></span>
            <div className={style.wrapperBlock}>
                <main>
                    {children}
                </main>
                {/*Link to Vova`s component*/}
                <NavLink to={'/'} className={style.button}>
                    Edit Account
                </NavLink>
            </div>
        </section>

    );
}

export default FormInfo;
