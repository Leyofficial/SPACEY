import style from './checkStock.module.scss'
export function checkStock(text : string) {
    function checkByText() {
        switch (text.toLowerCase()) {
            case 'in stock' :
            return <p style={{color : '#2DB224'}}>IN STOCK</p>
            case  'out of stock' :
                return <p style={{color : '#EE5858'}}>OUT OF STOCK</p>
        }
    }
    return (
        <div className={style.text}>
            {checkByText()}
        </div>
    )
}