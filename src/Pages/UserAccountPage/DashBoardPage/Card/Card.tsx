import style from './Card.module.scss'
import {HiOutlineDotsHorizontal} from "react-icons/hi";
import {PiCopyThin} from "react-icons/pi";
import {SiVisa} from "react-icons/si";
import React, {useEffect, useRef} from "react";
import ClipboardJS from 'clipboard';
import {successToaster} from "../../../../Utility/ToasterActions/SuccessToaster.tsx";
import {errorToaster} from "../../../../Utility/ToasterActions/ErrorToaster.tsx";
import {Toaster} from "react-hot-toast";
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {Button, PopupBody } from './Popup/popupStyles.ts';

// interface ICard {
//     color : string,
//     cardDetails: any
// }
function Card() {
    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
    const numberToCopy = '4441 1144 3155 3814'; // Замените на ваш реальный номер
    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

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
                <Button aria-describedby={id} type="button" onClick={handleClick}>
                    <div className={style.actionCard}><HiOutlineDotsHorizontal/></div>
                </Button>
                <BasePopup id={id} open={open} anchor={anchor}>
                    <PopupBody>
                        <div className={style.popupItems}>
                            <p className={style.popupItem}>
                                Edit Card
                            </p>
                            <p className={style.popupItem}>
                                Delete Card
                            </p>
                        </div>
                    </PopupBody>
                </BasePopup>
            </header>
            <main className={style.mainCard}>
                <p className={style.cardInfo}>Card number</p>
                <div className={style.cardNumberBlock}>
                    <p className={style.cardNumber}>**** **** **** 3814</p>
                    <button ref={buttonRef} data-clipboard-text={numberToCopy} className={style.actionCard}>
                        <PiCopyThin/></button>
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