import style from './ForgetPassword.module.scss'
import {FormInput} from "../../../Utility/FormInput/FormInput.tsx";
import {useFormRegister} from "../../../hooks/auth/useFormRegister.ts";
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import toast, {Toaster} from "react-hot-toast";
import {BsArrowRightShort} from "react-icons/bs";
import AllreadyQuestion from "../utitlity/AllreadyQuestion.tsx";

interface MyForm {
    email : string
}
function ForgetPassword() {
    const defaultValues = ['email'];
    // const navigate = useNavigate()
    const {register , handleSubmit , errors} = useFormRegister(defaultValues);

    const submit:  SubmitHandler<MyForm | any> = data  => {
        toast.success('Success !')
        console.log(data)
        // navigate('/')
    }
    const error: SubmitErrorHandler<MyForm> = () => {
        toast.error("All inputs required.")
    }
    return (
        <div className={style.block}>
            <Toaster
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
        </div>
    )
}
export default ForgetPassword