import style from './checkStock.module.scss'

export function checkStock(boolean: boolean | undefined) {
    function checkByText() {
        if (boolean) {
            return <p style={{color: '#2DB224'}}>IN STOCK</p>
        } else {
            return <p style={{color: '#EE5858'}}>OUT OF STOCK</p>
        }
    }

    return (
        <div className={style.text}>
            {checkByText()}
        </div>
    )
}