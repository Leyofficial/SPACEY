import style from './FormInfo.module.scss'
import React from "react";

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
                <button className={style.button}>
                    Edit Account
                </button>
            </div>
        </section>

    );
}

export default FormInfo;
