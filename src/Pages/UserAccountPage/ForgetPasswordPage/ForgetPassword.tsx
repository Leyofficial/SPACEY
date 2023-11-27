import style from './ForgetPassword.module.scss'
import {FormInput} from "../../../Utility/FormInput/FormInput.tsx";
import {useFormRegister} from "../../../hooks/auth/useFormRegister.ts";
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import toast, {Toaster} from "react-hot-toast";
import {BsArrowRightShort} from "react-icons/bs";
import AllreadyQuestion from "../utitlity/AllreadyQuestion.tsx";
import {useState} from "react";
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn.tsx";


interface MyForm {
    email: string
}

function ForgetPassword() {
    const [isPending, setPending] = useState<boolean>(false);
    const [currentEmail , setEmail] = useState('')
    const defaultValues = ['email'];
    const {register, handleSubmit, errors} = useFormRegister(defaultValues);

    const submit: SubmitHandler<MyForm | any> = data => {
        toast.success('Success !')
        console.log(data)
        setEmail(data.email);
        setPending(true)
    }
    const error: SubmitErrorHandler<MyForm> = () => {
        toast.error("All inputs required.")
    }
    return (
        <div className={style.block}>
            {!isPending ? <>  <Toaster
                position="top-right"
                reverseOrder={false}
            />
                <div className={style.textBlock}>
                    <h2 className={style.title}>Forget Password</h2>
                    <p className={style.subtitle}>
                        Enter the email address or mobile phone number associated with your Clicon account.
                    </p>
                </div>
                <form onSubmit={handleSubmit(submit, error)}>
                    <div className={style.inputs}>
                        <FormInput errors={errors} name={'email'} label={'Email Address'} register={register}/>
                    </div>
                    <button type="submit" className={'button'}>
                        <p className={'textBtn'}>Send Code</p>
                        <BsArrowRightShort color={'white'} size={30}/>
                    </button>
                </form>
                <div className={style.questionsBlock}>
                    <AllreadyQuestion question={'Already have account'} path={'/user-account/login'} todo={'Login'}/>
                    <AllreadyQuestion path={'/user-account/sign-up'} question={'Don’t have account'} todo={'Sign up'}/>
                </div>
                <div className={style.footer}>
                    You may contact <span>Customer Service</span> for help restoring access to your account.
                </div>
            </> : <div className={style.textBlock}>
               <h2 className={style.title}>Check you email</h2>
                <p className={style.subtitle}>
                    We will send a confirmation email to this  <span>{currentEmail}</span>  email about your forgotten password. If it's not there, check your spam folder.
                </p>
                <p className={style.notArrive}>If the email did not arrive, check your email and try again</p>
                <div className={style.btn}>
                    <CustomBtn arrowLeft={true} callback={() => setPending(false)} text={'Try again'}/>
                </div>
            </div>}

        </div>
    )
}

export default ForgetPassword