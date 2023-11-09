import style from './Header.module.scss'
import {CiFacebook, CiTwitter} from "react-icons/ci";
import {AiOutlineInstagram, AiOutlineUser, AiOutlineYoutube} from "react-icons/ai";
import logo from './../../assets/icons/logo.svg'
import Input from "../../Utility/Input/Input.tsx";
import {useState} from "react";
import {Badge, IconButton} from "@mui/material";
import {PiBasket} from "react-icons/pi";
import {MdFavoriteBorder} from "react-icons/md";


function Header() {
    function notificationsLabel(count: number) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }
    const [inputValue  , setValue ] = useState<string>('')
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.topBlock}>
                    <nav className={style.nav}>
                        <p className={style.welcome}>Welcome to Spacey online eCommerce store. </p>
                        <div className={style.rightBlock}>
                            <div className={style.socialMedia}>
                                <p>Follow us:</p>
                                <div className={style.listSocial}>
                                    <CiTwitter size={30}/>
                                    <CiFacebook size={30}/>
                                    <AiOutlineYoutube size={30}/>
                                    <AiOutlineInstagram size={30}/>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={style.bottomBlock}>
                    <nav className={style.nav}>
                        <div className={style.titleBlock}>
                            <img src={logo} alt="logo"/>
                            <h1 className={style.title}>SPACEY</h1>
                        </div>
                        <div className={style.inputBlock}>
                            <Input
                                value={inputValue}
                                callbackInput={setValue}
                                callbackBtn={() => console.log('click')}
                                type={'text'}
                                placeholder={'Search for anything...'}
                                typeBtn={'search'}/>
                        </div>
                        <div className={style.actionBlock}>
                            <IconButton onClick={() => console.log('b')} aria-label={notificationsLabel(100)}>
                                <Badge badgeContent={1} color="info">
                                    <PiBasket color={'white'}/>
                                </Badge>
                            </IconButton>
                            <IconButton onClick={() => console.log('f')}>
                                <MdFavoriteBorder color={'white'}/>
                            </IconButton>
                            <IconButton onClick={() => console.log('p')}>
                                <AiOutlineUser color={'white'}/>
                            </IconButton>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    );
}

export default Header