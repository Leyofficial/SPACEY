import style from './UserInfo.module.scss';
import CustomInput from "../../../../Utility/CustomInput/CustomInput.tsx";
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {
    changeCity,
    changeCountry, changeDisplayName,
    changeEmail,
    changeFullName,
    changeGivenName, changePhone, changeZipCode,
    IUserState, setUser
} from "../../../../redux/user/reducers/UserSlice.ts";
import {editUser} from "../../../../ApiRequests/User/User.ts";
import {Toaster} from "react-hot-toast";
import {successToaster} from "../../../../Utility/ToasterActions/SuccessToaster.tsx";
import {useAppDispatch} from "../../../../redux/hooks/hooks.ts";

const UserInfo = ({user}:IUserState) => {
    const dispatch = useAppDispatch();

    const saveInfoHandler = () => {
        editUser({user:user}).then(res => {
            if(res.status === 200){
               console.log(res.data.updateUser)
                dispatch(setUser( res.data.updateUser))
                successToaster('Your changes have been saved')
            }
        })
    }

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className={style.userInfo}>
                <div className={style.firstPart}>
                    <CustomInput name={'name'} placeholder={'Kevin'} label={'Display name'} value={user.givenName} callback={changeGivenName}></CustomInput>
                    <CustomInput name={'fullname'} placeholder={'Kevin Gilbert'} label={'Full Name'} value={user.fullyName} callback={changeFullName}></CustomInput>
                    <CustomInput name={'email'} inputType={'email'} placeholder={'Kevin@gmail.com'} label={'Email'} value={user.email} callback={changeEmail}></CustomInput>

                    <CustomInput name={'country'} placeholder={'Bangladesh'} label={'Country/Region'} value={user.address.country} callback={changeCountry}></CustomInput>
                    <div className={style.btn}>
                        <CustomBtn blockWidth={'100%'} text={"save changes"} callback={saveInfoHandler}></CustomBtn>
                    </div>

                </div>
            <div className={style.secondPart}>
                <CustomInput name={'account'} placeholder={'Account name'} label={'User name'} value={user.displayName} callback={changeDisplayName}></CustomInput>
                <CustomInput name={'number'} inputType={'number'} placeholder={'+1-202-555-0118'} label={'Phone Number'} value={user.phone} callback={changePhone}></CustomInput>
                <div className={style.wrapperAddress}>
                    <CustomInput name={'city'} placeholder={'Kiev'} label={'City'} value={user.address.city} callback={changeCity}></CustomInput>
                    <CustomInput name={'zip'} inputType={'number'} placeholder={'1207'} label={'Zip Code'} value={user.address.zipCode} callback={changeZipCode}></CustomInput>
                </div>
            </div>
            </div>
        </>
    );
};

export default UserInfo;