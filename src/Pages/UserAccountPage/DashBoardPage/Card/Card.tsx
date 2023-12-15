import style from './Card.module.scss'
import {HiOutlineDotsHorizontal} from "react-icons/hi";
import {PiCopyThin} from "react-icons/pi";
import {SiMastercard, SiVisa} from "react-icons/si";
import React, {useEffect, useRef, useState} from "react";
import ClipboardJS from 'clipboard';
import {successToaster} from "../../../../Utility/ToasterActions/SuccessToaster.tsx";
import {errorToaster} from "../../../../Utility/ToasterActions/ErrorToaster.tsx";
import {Toaster} from "react-hot-toast";
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {Button, PopupBody } from './Popup/popupStyles.ts';
import {ICard} from "../dashboardTypes.ts";

function Card({cardData} : ICard) {
    const [finishEditing , setFinish ] = useState<boolean>(false);
    const [isEditing , setEditing] = useState<boolean>(true);
    const [newNumberCard , setNewNumber] = useState<string>('')
    const [anchor, setAnchor] = React.useState<null | HTMLElement | boolean>(null);
    const numberToCopy = cardData.number; // Замените на ваш реальный номер
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

    useEffect(() => {
        if (!finishEditing) return
        setEditing(!isEditing)
        setAnchor(false);
        successToaster('Card number successfully changed!');
    }, [finishEditing]);

    return (
        <div className={style.block} style={cardData.number[1][2] == '44' ? {background : 'radial-gradient(236.15% 138.52% at 0% 0%, #1B6392 0%, #124261 100%)'} : {background : 'radial-gradient(236.15% 138.52% at 0% 0%, #248E1D 0%, #2DB224 100%)'}}>
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
                    <PopupBody onClick={() => setAnchor(false)}>
                        <div className={style.popupItems}>
                            <p onClick={() => setEditing(!isEditing)} className={style.popupItem}>
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
                    {isEditing ? <>
                        <p className={style.cardNumber}>{cardData.number}</p>
                    </> : <input value={newNumberCard} type={'number'} autoFocus={true} onChange={(e) => setNewNumber(e.target.value)} className={style.cardNumberInput} placeholder={'**** **** **** 3814'}></input>}
                    <button ref={buttonRef} data-clipboard-text={numberToCopy} className={style.actionCard}>{!isEditing ? null : <PiCopyThin/>}</button>
                </div>
            </main>
            <footer className={style.footerCard}>
                <div className={style.cardHolder}>
                    {cardData.number[0][1] == '44' ?
                    <SiVisa fontSize={'2.5rem'}/> : <SiMastercard  fontSize={'2.5rem'} />}

                    <p className={style.ownerCard}>{cardData.name}</p>
                </div>
            </footer>
            {!isEditing ?
                <div onClick={() => setFinish(!finishEditing)} className={style.saveBtn}>Save</div> : null}
        </div>
    )
}

export default Card