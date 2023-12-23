import style from './Card.module.scss'
import {HiOutlineDotsHorizontal} from "react-icons/hi";
import {PiCopyThin} from "react-icons/pi";
import {SiVisa} from "react-icons/si";
import React, {useEffect, useRef, useState} from "react";
import ClipboardJS from 'clipboard';
import {successToaster} from "../../../../Utility/ToasterActions/SuccessToaster.tsx";
import {errorToaster} from "../../../../Utility/ToasterActions/ErrorToaster.tsx";
import {Toaster} from "react-hot-toast";
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {Button, PopupBody} from './Popup/popupStyles.ts';
import {ICard} from "../dashboardTypes.ts";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks/hooks.ts";
import {setUser} from "../../../../redux/user/reducers/UserSlice.ts";

function Card({cardData}: ICard) {
    const {user} = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [finishEditing, setFinish] = useState<boolean>(false);
    const [isEditing, setEditing] = useState<boolean>(true);
    const [newNumberCard, setNewNumber] = useState<string>('');
    const [newNameCard, setNewName] = useState<string>('');
    const [anchor, setAnchor] = React.useState<null | HTMLElement | boolean>(null);
    const numberToCopy = cardData.number; // Замените на ваш реальный номер
    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const deleteClick = () => {
        axios.patch(`https://spacey-server.vercel.app/auth/card/delete/${user._id}`, {
            idCard: cardData.idCard
        }).then((res) => {
            successToaster('Card deleted !')
            dispatch(setUser(res.data.updatedUser))
        }).catch(() => {
            errorToaster();
        })
    }

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
        axios.post(`https://spacey-server.vercel.app/auth/card/edit/${user._id}`, {
            data: {
                number: newNumberCard || cardData.number,
                name: newNameCard || cardData.name,
                cvc: cardData.cvc,
                expiry: cardData.cvc,
            },
            idCard: cardData.idCard
        }).then((res) => {
            dispatch(setUser(res.data.updatedUser))
            setEditing(!isEditing)
            setAnchor(false);
            successToaster('Card number successfully changed!');
        }).catch(() => errorToaster())
    }, [finishEditing]);

    return (
        <div className={style.block} style={cardData.number.startsWith('4') ? {
            background: 'radial-gradient(236.15% 138.52% at 0% 0%, #1B6392 0%, #124261 100%)',
            color: 'white'
        } : {background: 'linear-gradient(25deg, #fbfbfb, #e8e9e5)', color: '#151515'}}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <header className={style.headerCard}>
                <p className={style.totalAmount}>$95, 400.00 USD</p>
                <Button aria-describedby={id} type="button" onClick={handleClick}>
                    <div className={style.actionCard}><HiOutlineDotsHorizontal
                        color={cardData.number.startsWith('4') ? 'white' : '#151515'}/></div>
                </Button>
                <BasePopup id={id} open={open} anchor={anchor}>
                    <PopupBody onClick={() => setAnchor(false)}>
                        <div className={style.popupItems}>
                            <p onClick={() => setEditing(!isEditing)} className={style.popupItem}>
                                Edit Card
                            </p>
                            <p onClick={() => deleteClick()} className={style.popupItem}>
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
                        <p className={style.cardNumber} style={cardData.number.startsWith('4') ?  {color : 'white'} : {color : '#151515'}}>{cardData.number}</p>
                    </> : <input  style={cardData.number.startsWith('4') ? {color : 'white'} : {color : '#151515'}} value={newNumberCard} type={'number'} autoFocus={true}
                                 onChange={(e) => setNewNumber(e.target.value)} className={style.cardNumberInput}
                                 placeholder={cardData.number}></input>}
                    <button ref={buttonRef} data-clipboard-text={numberToCopy}
                            className={style.actionCard}>{!isEditing ? null :
                        <PiCopyThin color={cardData.number.startsWith('4') ? 'white' : '#151515'}/>}
                    </button>
                </div>
            </main>
            <footer className={style.footerCard}>
                <div className={style.cardHolder}>
                    {cardData.number.startsWith('4') ?
                        <SiVisa fontSize={'3.8rem'}/> : <div className={style.masterCard}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                 viewBox="0 0 48 48">
                                <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
                                <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
                                <path fill="#ff3d00"
                                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
                            </svg>
                            <p className={style.textMasterCard}>mastercard</p>
                        </div>}
                    {isEditing ? <p className={style.ownerCard}>{cardData.name}</p> :
                        <input style={cardData.number.startsWith('4') ?  {color : 'white'} : {color : '#151515'}} value={newNameCard} onChange={(e) => setNewName(e.target.value)}
                               className={style.cardNameInput} placeholder={cardData.name}></input>}
                </div>
            </footer>
            {!isEditing ?
                <div onClick={() => setFinish(!finishEditing)} className={style.saveBtn}>Save</div> : null}
        </div>
    )
}

export default Card