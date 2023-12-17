import style from './UserSetting.module.scss';
import testImage from '../../../assets/background/aboutImage.png'
import UserInfo from "./UserInfo/UserInfo.tsx";
import {useAppSelector} from "../../../redux/hooks/hooks.ts";

const UserSetting = () => {
    const {user} = useAppSelector(state => state.user)

    return (
        <article className={style.setting}>
            <h1>ACCOUNT SETTING</h1>
            <main className={style.main}>
                <section className={style.avatar}>
                    <img alt={'avatar'} src={testImage}/>
                </section>

                <section className={style.info}>
                   <UserInfo user={user}></UserInfo>
                </section>
            </main>

        </article>
    );
};

export default UserSetting;