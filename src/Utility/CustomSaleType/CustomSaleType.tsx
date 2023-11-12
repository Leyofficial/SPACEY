import {useEffect, useState} from "react";
import style from './CustomSaleType.module.scss'
function CustomSaleType ({typeSale = 'hot'}  : string) {
    const [color , setColor] = useState<string>('')
    useEffect(() => {
        lookToText();
    },[typeSale])
    function lookToText () {
        switch (typeSale) {
            case typeSale.toLowerCase() === 'hot' :
                setColor('#EE5858');
                break;
            case typeSale.toLowerCase() === 'best deals' || 'introducing' :
                setColor('#2DA5F3');
                break;
            case typeSale.toLowerCase() === 'sale' :
                setColor('#2DB224');
                break;
            case typeSale.toLowerCase() === 'sold out' :
                setColor('#929FA5');
                break;
            case typeSale.toLowerCase().includes('off') :
                setColor('#EFD33D');
                break;
        }
    }
    return (
        <div className={style.btn}>
            <p className={style.typeSale}>{typeSale}</p>
        </div>
    )
}
export default CustomSaleType