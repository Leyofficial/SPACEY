import style from './UserSetting.module.scss';
import UserInfo from "./UserInfo/UserInfo.tsx";
import {useAppSelector} from "../../../redux/hooks/hooks.ts";
import MyDropzone from "../../../Utility/MyDropzone/MyDropzone.tsx";
import {useGetImage} from "../../../hooks/getImage/useGetImage.ts";

const UserSetting = () => {
    const {user} = useAppSelector(state => state.user)
    const {image,isLoading} = useGetImage(user?.picture)

    return (
        <article className={style.setting}>
            <h1>ACCOUNT SETTING</h1>
            <main className={style.main}>
                <section className={style.avatar}>
                    <MyDropzone isLoading={isLoading} user={user} image={image}></MyDropzone>
                </section>

                <section className={style.info}>
                   <UserInfo user={user}></UserInfo>
                </section>
            </main>

        </article>
    );
};

export default UserSetting;