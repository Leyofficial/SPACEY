import style from './Login.module.scss'
import {FormInput} from "../../../Utility/FormInput/FormInput.tsx";
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import {Toaster} from "react-hot-toast";
import CustomTab from "../../../Utility/CustomTab/CustomTab.tsx";
import {tabArray} from "../tabArray.ts";
import {BsArrowRightShort} from "react-icons/bs";
import {NavLink, useNavigate} from "react-router-dom";
import {useFormRegister} from "../../../hooks/auth/useFormRegister.ts";
import axios from "axios";
import {useGoogleLogin} from "@react-oauth/google";
import {FcGoogle} from "react-icons/fc";
import {useEffect, useState} from "react";
import {BtnLogoText} from "../../../Utility/BtnLogoText/BtnLogoText.tsx";
import {successAction} from "../utitlity/successAction.ts";
import {failureAction} from "../utitlity/failureAction.ts";
import {useAppDispatch} from "../../../redux/hooks/hooks.ts";
import {setUser} from "../../../redux/user/reducers/UserSlice.ts";
import {errorToaster} from "../../../Utility/ToasterActions/ErrorToaster.tsx";

interface MyForm {
    email: string,
    password: string
}
interface ILogin {
    callback : (a : boolean) => void
}

function Login({callback} : ILogin) {
    const dispatch = useAppDispatch()
    const [userInfoGoogle, setUserInfoGoogle] = useState<null | any>(null);
    const defaultValues = ['email', 'password'];
    const navigate = useNavigate()

    const googleLogin = useGoogleLogin({
        onSuccess: async tokenResponse => {
            const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {Authorization: `Bearer ${tokenResponse.access_token}`}
            })
            if (userInfo) {
                setUserInfoGoogle(userInfo.data)
            }
        },
        onError: () => errorToaster('Login failed :(')
    })

    useEffect(() => {
        if (!userInfoGoogle) return
        const {sub , email } = userInfoGoogle;
        axios.get(`https://spacey-server.vercel.app/auth/google?email=${email}&googleToken=${sub}`).then((res) => {
            if (!res.data.foundUser) {
                errorToaster('User not found')
                return
            }
            callback(true)
            successAction(res.data.foundUser.googleToken, navigate)
        }).catch((err) => {
            errorToaster(err || 'Something went wrong!');
        })
    }, [userInfoGoogle]);

    const {register, handleSubmit, reset, errors} = useFormRegister(defaultValues);
    const submit: SubmitHandler<MyForm> = (dataFormInputs) => {
        axios
            .get(`https://spacey-server.vercel.app/auth?email=${dataFormInputs.email}&password=${dataFormInputs.password}`)
            .then((response) => {
                dispatch(setUser(response.data.user))
                reset();
                successAction(response.data.user.userToken , navigate)
                callback(true)
            })
            .catch((error) => {
                failureAction(error , reset)
            });
    };

    const error: SubmitErrorHandler<MyForm> = () => {
       errorToaster("All inputs required.")
    }

    return (
        <>
            <div className={style.block}>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <div className={style.tabs}>
                    <CustomTab array={[...tabArray]}/>
                </div>
                <form onSubmit={handleSubmit(submit, error)}>
                    <div className={style.emailInput}>
                        <FormInput
                            errors={errors}
                            name={'email'}
                            label={'Email Address'}
                            type={'email'}
                            register={register}
                        />
                    </div>
                    <div className={style.passwordInput}>
                        <FormInput
                            errors={errors}
                            name={'password'}
                            label={'Password'}
                            type={'password'}
                            eye={true}
                            register={register}
                        />
                        <NavLink to={'/user-account/login/forget-password'} className={style.forgetPassword}>Forget
                            Password</NavLink>
                    </div>

                    <button type="submit" className={'button'}>
                        <p className={'textBtn'}>Login</p>
                        <BsArrowRightShort color={'white'} size={30}/>
                    </button>
                    <div className={style.orChoose}>
                        <span className={style.line}></span>
                        <p className={style.orText}>or</p>
                        <span className={style.line}></span>
                    </div>
                    <div className={style.signInWith}>
                        <BtnLogoText text={'Sign in with Google'} logo={<FcGoogle/>} callback={googleLogin}/>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
