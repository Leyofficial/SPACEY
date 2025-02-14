import style from './getColorElement.module.scss'

export const getColorElement = (color: string) => {
    console.log(color)

    switch (color) {
        case "BLACK" || "DARK" :
            return <p className={`${style.wrapper} ${style.activeColor}`}><span style={{background:'Black'}} className={`${style.color}`}></span></p>
        case "WHITE" :
            return <p className={`${style.wrapper} ${style.activeColor}`}><span style={{background:'White'}}  className={`${style.color}`}></span></p>
        case "BLUE" :
            return <p className={`${style.wrapper} ${style.activeColor}`}><span style={{background:'Blue'}}  className={`${style.color}`}></span></p>
        case "TITANIUM" :
            return <p className={`${style.wrapper} ${style.activeColor}`}><span style={{background:'rgba(66,58,66,0.45)'}}  className={`${style.color}`}></span></p>
        case "RED" :
            return <p className={`${style.wrapper} ${style.activeColor}`}><span style={{background:'rgba(206,2,2,0.45)'}}  className={`${style.color}`}></span></p>
        case "GREY" || "GRAPHITE" :
            return <p className={`${style.wrapper} ${style.activeColor}`}><span style={{background:'rgb(141,141,141)'}}  className={`${style.color}`}></span></p>
        case "YELLOW" :
            return <p className={`${style.wrapper} ${style.activeColor}`}><span style={{background:'rgb(255,230,1)'}}  className={`${style.color}`}></span></p>
        case "GREEN" :
            return <p className={`${style.wrapper} ${style.activeColor}`}><span style={{background:'rgb(44,248,0)'}}  className={`${style.color}`}></span></p>
        case "SILVER" :
            return <p className={`${style.wrapper} ${style.activeColor}`}><span style={{background:'rgba(42,45,42,0.64)'}}  className={`${style.color}`}></span></p>

        default :
            return <p className={`${style.wrapper} ${style.activeColor}`}><span className={style.default}></span></p>
    }
}