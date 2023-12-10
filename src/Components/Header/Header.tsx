import style from './Header.module.scss'
import {CiFacebook, CiTwitter} from "react-icons/ci";
import {AiOutlineInstagram, AiOutlineUser, AiOutlineYoutube} from "react-icons/ai";
import logo from './../../assets/icons/logo.svg'
import Input from "../../Utility/Input/Input.tsx";
import {useEffect, useState} from "react";
import {PiBasket} from "react-icons/pi";
import {MdFavoriteBorder} from "react-icons/md";
import {CustomIcon} from "../../Utility/CustomIcon/CustomIcon.tsx";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/hooks.ts";
import {getBasketItems} from "../../ApiRequests/Items/basketItems.ts";

function Header() {
    const [inputValue, setValue] = useState<string>('')
    const {user} = useAppSelector(state => state.user)
    const [countItemCart,setCountItemCart] = useState<number>(0)
    useEffect(() => {
        getBasketItems(user._id).then(res => {
            if(res.status === 200) {
                setCountItemCart(res.data.foundOrders.products.length)
            }
        })
    },[user])
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
                            <NavLink className={style.titleBlock} to={'/'}>
                            <img src={logo} alt="logo"/>
                            <h1 className={style.title}>SPACEY</h1>
                            </NavLink>
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
                            <CustomIcon path={'payment-grid/basket'} valueMultiply={countItemCart} isMultiply={true} icon={<PiBasket color={'white'}/>}/>
                            <CustomIcon path={`wish`} icon={<MdFavoriteBorder color={'white'}/>}/>
                            <CustomIcon path={'/user-account/login'} icon={<AiOutlineUser color={'white'}/>}/>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    );
}

export default Header