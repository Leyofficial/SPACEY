import style from './Header.module.scss'
import {CiFacebook, CiTwitter} from "react-icons/ci";
import {AiOutlineInstagram, AiOutlineYoutube} from "react-icons/ai";

function Header() {
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
            </div>
        </div>
    )
}

export default Header