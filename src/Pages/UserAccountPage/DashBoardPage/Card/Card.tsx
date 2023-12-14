import style from './Card.module.scss'
import {HiOutlineDotsHorizontal} from "react-icons/hi";
import {PiCopyThin} from "react-icons/pi";
import {SiVisa} from "react-icons/si";
import {useEffect, useRef} from "react";
import ClipboardJS from 'clipboard';
import {successToaster} from "../../../../Utility/ToasterActions/SuccessToaster.tsx";
import {errorToaster} from "../../../../Utility/ToasterActions/ErrorToaster.tsx";
import {Toaster} from "react-hot-toast";
// interface ICard {
//     color : string,
//     cardDetails: any
// }
function Card() {
    const numberToCopy = '4441 1144 3155 3814'; // Замените на ваш реальный номер

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const clipboard = new ClipboardJS(buttonRef.current!, {
            text: () => numberToCopy,
        });

        clipboard.on('success', () => {
            successToaster('Card number successfully copied')
        });

        clipboard.on('error', (e) => {
            errorToaster(`Failed to copy text : ${e.text} `);
        });

        return () => {
            clipboard.destroy();
        };
    }, [numberToCopy]);

    return (
        <div className={style.block}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <header className={style.headerCard}>
                <p className={style.totalAmount}>$95, 400.00 USD</p>
                <div className={style.actionCard}><HiOutlineDotsHorizontal/></div>
            </header>
            <main className={style.mainCard}>
                <p className={style.cardInfo}>Card number</p>
                <div className={style.cardNumberBlock}>
                    <p className={style.cardNumber}>**** **** **** 3814</p>
                    <button ref={buttonRef} data-clipboard-text={numberToCopy} className={style.actionCard}><PiCopyThin/></button>
                </div>
            </main>
            <footer className={style.footerCard}>
                <div className={style.cardHolder}>
                    <SiVisa fontSize={'2.5rem'}/>
                    <p className={style.ownerCard}>Kevin Gilbert</p>
                </div>
            </footer>
        </div>
    )
}

export default Card