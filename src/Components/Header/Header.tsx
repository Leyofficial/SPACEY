import style from './Header.module.scss'
import {CiFacebook, CiTwitter} from "react-icons/ci";
import {AiOutlineInstagram, AiOutlineUser, AiOutlineYoutube} from "react-icons/ai";
import logo from './../../assets/icons/logo.svg'
import Input from "../../Utility/Input/Input.tsx";
import {useState} from "react";
import {PiBasket} from "react-icons/pi";
import {MdFavoriteBorder} from "react-icons/md";
import {CustomIcon} from "../../Utility/CustomIcon/CustomIcon.tsx";
import {NavLink} from "react-router-dom";

function Header() {
    const [inputValue, setValue] = useState<string>('')
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
                            <NavLink to={'/'}>
                            <img src={logo} alt="logo"/>
                            <h1 className={style.title}>SPACEY</h1>
                            </NavLink>
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
                            <CustomIcon valueMultiply={10} isMultiply={true} icon={<PiBasket color={'white'}/>}/>
                            <CustomIcon icon={<MdFavoriteBorder color={'white'}/>}/>
                            <CustomIcon icon={<AiOutlineUser color={'white'}/>}/>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    );
}

export default Header