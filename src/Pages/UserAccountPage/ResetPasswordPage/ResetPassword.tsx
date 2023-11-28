import style from './ResetPassword.module.scss'
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import toast, {Toaster} from "react-hot-toast";
import {useFormRegister} from "../../../hooks/auth/useFormRegister.ts";
import {useState} from "react";
import {FormInput} from "../../../Utility/FormInput/FormInput.tsx";
import {BsArrowRightShort} from "react-icons/bs";
import axios from "axios";

interface MyForm {
    password : string,
    confirmPassword : string,
}
function ResetPassword({callback} : any) {
    const [pending, setPending] = useState<boolean>(false)
    const defaultValues = ['password , confirmPassword'];
    const {register, reset, handleSubmit, errors} = useFormRegister(defaultValues);
    const submit: SubmitHandler<MyForm | any> = data => {
        if (data.password !== data.confirmPassword) {
            toast.error('Password and confirm password should be same');
            return
        }
        // https://spacey-server.vercel.app/auth/resetPassword email

        axios
            .post('https://spacey-server.vercel.app/auth/resetPassword' , {
                email : data.email
            })

            .catch((error) => {
                const errorMessage = error.response ? error.response.data.message : 'Something went wrong ...';
                toast.error(errorMessage);
                reset()
            });
        toast.success('Success !')
        console.log(data)
        setPending(true)
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
                <h2 className={style.title}>Reset Password</h2>
                <p className={style.subtitle}>
                    Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce lorem nunc, fringilla sit amet
                    nunc.
                </p>
            </div>
            <form onSubmit={handleSubmit(submit, error)}>
                <div className={style.inputs}>
                    <div className={style.firstInput}>
                        <FormInput errors={error} name={'password'} label={'Password'} type={'password'} register={register} placeHolder={'8+ characters'} eye={true}/>
                    </div>
                    <div className={style.secondInput}>
                        <FormInput errors={errors} name={'confirmPassword'} type={'password'} label={'Confirm Password'} register={register} eye={true}/>
                    </div>
                </div>
                <button type="submit" className={'button'}>
                    <p className={'textBtn'}>Reset Password</p>
                    <BsArrowRightShort color={'white'} size={30}/>
                </button>
            </form>
        </div>
    )
}

export default ResetPassword