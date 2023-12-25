import style from './CheckStatus.module.scss'
export function CheckStatus(text : string){
    const prepareStyle = {
        color : '#FA8232'
    }
    const completedStyle = {
        color : '#2DB224'
    }
    const canceledStyle = {
        color : '#EE5858'
    }
    const lowerCaseText = text.toLowerCase();
    if (lowerCaseText.includes('progress')) {
        return <p className={style.text} style={prepareStyle}>{text.toUpperCase()}</p>
    } else if (lowerCaseText.includes('completed')) {
        return <p className={style.text} style={completedStyle}>{text.toUpperCase()}</p>
    } else if (lowerCaseText.includes('canceled')) {
        return  <p className={style.text} style={canceledStyle}>{text.toLowerCase()}</p>
    }
}