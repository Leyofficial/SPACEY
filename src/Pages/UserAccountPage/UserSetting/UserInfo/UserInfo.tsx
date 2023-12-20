import style from './UserInfo.module.scss';
import CustomInput from "../../../../Utility/CustomInput/CustomInput.tsx";
import CustomBtn from "../../../../Utility/CustomBtn/CustomBtn.tsx";
import {
    changeCity,
    changeCountry, changeDisplayName,
    changeEmail,
    changeFullName,
    changeGivenName, changePhone, changeZipCode,
    IUserState
} from "../../../../redux/user/reducers/UserSlice.ts";
import {editUser} from "../../../../ApiRequests/User/User.ts";
import {Toaster} from "react-hot-toast";
import {successToaster} from "../../../../Utility/ToasterActions/SuccessToaster.tsx";

const UserInfo = ({user}:IUserState) => {

    const saveInfoHandler = () => {
        editUser({user:user}).then(res => {
            if(res.status === 200){
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
                    <CustomInput placeholder={'Kevin'} label={'Display name'} value={user.givenName} callback={changeGivenName}></CustomInput>
                    <CustomInput placeholder={'Kevin Gilbert'} label={'Full Name'} value={user.fullyName} callback={changeFullName}></CustomInput>
                    <CustomInput inputType={'email'} placeholder={'Kevin@gmail.com'} label={'Email'} value={user.email} callback={changeEmail}></CustomInput>

                    <CustomInput placeholder={'Bangladesh'} label={'Country/Region'} value={user.address.country} callback={changeCountry}></CustomInput>
                    <div className={style.btn}>
                        <CustomBtn text={"save changes"} callback={saveInfoHandler}></CustomBtn>
                    </div>

                </div>
            <div className={style.secondPart}>
                <CustomInput placeholder={'Account name'} label={'User name'} value={user.displayName} callback={changeDisplayName}></CustomInput>
                <CustomInput inputType={'number'} placeholder={'+1-202-555-0118'} label={'Phone Number'} value={user.phone} callback={changePhone}></CustomInput>
                <div className={style.wrapperAddress}>
                    <CustomInput placeholder={'Kiev'} label={'City'} value={user.address.city} callback={changeCity}></CustomInput>
                    <CustomInput inputType={'number'} placeholder={'1207'} label={'Zip Code'} value={user.address.zipCode} callback={changeZipCode}></CustomInput>
                </div>
            </div>
            </div>
        </>
    );
};

export default UserInfo;