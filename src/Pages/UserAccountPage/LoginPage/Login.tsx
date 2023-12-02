import style from './Login.module.scss'
import {FormInput} from "../../../Utility/FormInput/FormInput.tsx";
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import toast, {Toaster} from "react-hot-toast";
import CustomTab from "../../../Utility/CustomTab/CustomTab.tsx";
import {tabArray} from "../tabArray.ts";
import {BsArrowRightShort} from "react-icons/bs";
import {NavLink, useNavigate} from "react-router-dom";
import {useFormRegister} from "../../../hooks/auth/useFormRegister.ts";
import axios from "axios";
import GoogleLogin from "react-google-login";

interface MyForm {
    email: string,
    password: string
}

function Login() {
    const clientId = '982859489612-1o67pno0bhgh0dtvblloucbqbpjptlf5.apps.googleusercontent.com'
    const defaultValues = ['email', 'password'];
    const navigate = useNavigate()
    const handleGoogleLoginSuccess = (res : any) => {
        console.log("Google Credential Response:", res);
    }
    const handleGoogleFailure = (res : any) => {
        toast.error('Login failed!')
        console.log('Login Failed! , res :' , res)
    }
    const {register, handleSubmit, reset, errors} = useFormRegister(defaultValues);
    const submit: SubmitHandler<MyForm> = (dataFormInputs) => {
        axios
            .get(`https://spacey-server.vercel.app/auth?email=${dataFormInputs.email}&password=${dataFormInputs.password}`)
            .then((response) => {
                reset();
                localStorage.setItem('token', response.data.token);
                toast.success('Success');
                setTimeout(() => {
                    navigate('/')
                }, 1500)
            })
            .catch((error) => {
                const errorMessage = error.response ? error.response.data.message : 'Something went wrong ...';
                toast.error(errorMessage);
            });
    };

    const error: SubmitErrorHandler<MyForm> = () => {
        toast.error("All inputs required.")
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
                    <div className={style.orChoose}>
                        <span className={style.line}></span>
                        <p className={style.orText}>or</p>
                        <span className={style.line}></span>
                    </div>
                    <div className={style.googleAuth}>
                        <GoogleLogin
                            clientId={clientId}
                            onSuccess={handleGoogleLoginSuccess}
                            onFailure={handleGoogleFailure}
                        >
                            <span> Login with Google</span>
                        </GoogleLogin>
                    </div>
                    <button type="submit" className={'button'}>
                        <p className={'textBtn'}>Login</p>
                        <BsArrowRightShort color={'white'} size={30}/>
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;
