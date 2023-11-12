import {useEffect, useState} from "react";
import style from './CustomSaleType.module.scss'
interface ICustomSaleType {
    typeSale : string,
    percentage? : number
}
export function CustomSaleType ({typeSale} : ICustomSaleType) {
    const [color , setColor] = useState<string>('')
    useEffect(() => {
        lookToText();
        console.log(typeSale)
    },[typeSale])
    function lookToText () {
        switch (typeSale.toLowerCase()) {
            case 'hot' :
                setColor('#EE5858');
                break;
            case 'best deals' || 'introducing' :
                setColor('#2DA5F3');
                break;
            case 'sale' :
                setColor('#2DB224');
                break;
            case 'sold out' :
                setColor('#929FA5');
                break;
            case 'off' :
                setColor('#EFD33D');
                break;
            default : setColor('#EE5858')
        }
    }
    return (
        <div style={{backgroundColor : color}} className={style.btn}>
            <p className={style.typeSale}>{typeSale}</p>
        </div>
    )
}