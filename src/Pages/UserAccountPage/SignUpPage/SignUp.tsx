import style from './SignUp.module.scss'
import CustomTab from "../../../Utility/CustomTab/CustomTab.tsx";
import {tabArray} from "../tabArray.ts";
import {FormInput} from "../../../Utility/FormInput/FormInput.tsx";
import {useNavigate} from "react-router-dom";
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import {Toaster} from "react-hot-toast";
import {BsArrowRightShort} from "react-icons/bs";
import {useFormRegister} from "../../../hooks/auth/useFormRegister.ts";
import axios from "axios";
import {ICallbackAccount} from "../../../Routers/UserAccount/UserAccount.tsx";
import {BtnLogoText} from "../../../Utility/BtnLogoText/BtnLogoText.tsx";
import {FcGoogle} from "react-icons/fc";
import {useGoogleLogin} from "@react-oauth/google";
import {useEffect, useState} from "react";
import {successAction} from "../utitlity/successAction.ts";
import {failureAction} from "../utitlity/failureAction.ts";
import {errorToaster} from "../../../Utility/ToasterActions/ErrorToaster.tsx";
import {useAppDispatch} from "../../../redux/hooks/hooks.ts";
import {setUser} from "../../../redux/user/reducers/UserSlice.ts";

interface MyForm {
    name: string,
    email: string,
    password: string,
    repeatPassword: string
}

function SignUp({callback} : ICallbackAccount) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [userInfoGoogle, setUserInfoGoogle] = useState<null | any>(null);
    const defaultValues  = ['name' , 'email' , 'password' , 'repeatPassword'];
    const {register , handleSubmit , reset , errors} = useFormRegister(defaultValues);
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
        const {email_verified , family_name , given_name , locale , sub , email , picture} = userInfoGoogle
        axios.post('https://spacey-server.vercel.app/auth/google' , {
            email_verified : email_verified,
            family_name: family_name,
            given_name: given_name,
            locale: locale,
            picture: picture,
            sub: sub,
            email: email
        }).then(res => {
            successAction(res.data.createdAccount.googleToken , navigate , '/congratulations' , callback)
        }).catch(error => {
            failureAction(error , reset)
        })

    }, [userInfoGoogle]);

    // https://spacey-server.vercel.app/auth
    const submit: SubmitHandler<MyForm> = data => {
        if (data.password !== data.repeatPassword) {
            errorToaster('Password and confirm password should be same');
            return
        }
        axios
            .post('https://spacey-server.vercel.app/auth' , {
                givenName : data.name,
                email : data.email,
                password : data.password,
                passwordConfirm : data.repeatPassword,
            })
            .then((response) => {
               dispatch(setUser(response.data.newUser));
               successAction(response.data.newUser.userToken , navigate , '/congratulations',  callback)
            })
            .catch((error) => {
               failureAction(error , reset)
            });
    }

    const error: SubmitErrorHandler<MyForm> = () => {
        errorToaster('All inputs required.')
    }

    return (
        <div className={style.block}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className={style.tabs}>
                <CustomTab array={[...tabArray]}/>
            </div>
            <form onSubmit={handleSubmit(submit, error)}>
                <div className={style.inputs}>
                    <div className={style.nameInput}>
                        <FormInput
                            errors={errors}
                            name={'name'}
                            label={'Name'}
                            type={'text'}
                            register={register}
                            numCharacters={3}
                        />
                    </div>
                    <div className={style.emailInput}>
                        <FormInput
                            errors={errors}
                            name={'email'}
                            label={'Email Address'}
                            type={'email'}
                            register={register}
                        />
                    </div>
                    <div className={style.firstPassword}>
                        <FormInput errors={errors} name={'password'} label={'Password'} register={register}
                                   placeHolder={'8+ characters'}  type={'password'} eye={true}/>
                    </div>
                    <div className={style.secondPassword}>
                        <FormInput errors={errors} name={'repeatPassword'} label={'Confirm Password'}
                                    register={register} type={'password'} eye={true}/>
                    </div>
                </div>
                <button type="submit" className={'button'}>
                    <p className={'textBtn'}>Sign up</p>
                    <BsArrowRightShort color={'white'} size={30}/>
                </button>
            </form>
            <div className={style.orChoose}>
                <span className={style.line}></span>
                <p className={style.orText}>or</p>
                <span className={style.line}></span>
            </div>
            <div className={style.signInWith}>
                <BtnLogoText text={'Sign in with Google'} logo={<FcGoogle/>} callback={googleLogin}/>
            </div>
        </div>
    )
}

export default SignUp