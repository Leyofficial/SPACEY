import style from './ResetPassword.module.scss'
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import toast, {Toaster} from "react-hot-toast";
import {useFormRegister} from "../../../hooks/auth/useFormRegister.ts";
import {useState} from "react";
import {FormInput} from "../../../Utility/FormInput/FormInput.tsx";
import {BsArrowRightShort} from "react-icons/bs";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string';
import {CircularProgress} from "@mui/material";
import {ICallbackAccount} from "../../../Routers/UserAccount/UserAccount.tsx";
import {failureAction} from "../utitlity/failureAction.ts";

interface MyForm {
    password: string,
    confirmPassword: string,
}

function ResetPassword({callback}: ICallbackAccount) {
    const [pending, setPending] = useState<boolean>(false);
    const defaultValues = ['password , confirmPassword'];
    const location = useLocation();
    const {id} = queryString.parse(location.search);
    const navigate = useNavigate();
    // Теперь переменная id содержит значение из URL
    const {register, reset, handleSubmit, errors} = useFormRegister(defaultValues);
    const submit: SubmitHandler<MyForm> = (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error('Password and confirm password should be same');
            return
        }
        setPending(true)
        // https://spacey-server.vercel.app/auth/resetPassword email
        axios
            .post(`https://spacey-server.vercel.app/auth/updatePassword/${id}`, {
                newPassword: data.confirmPassword
            })
            .then((res) => {
                reset()
                setPending(false)
                toast.success(res.data.message || 'Success!')
                setTimeout(() => {
                    callback(false)
                    navigate('/')
                }, 2000)
            })
            .catch((error) => {
                failureAction(error , reset)
            });
    }
    const error: SubmitErrorHandler<MyForm> = () => {
        toast.error("All inputs required.");
    };
    return (
        <div className={style.block}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            {pending ? <div className={style.loadingBlock}><CircularProgress/></div> : <>
                <div className={style.textBlock}>
                    <h2 className={style.title}>Reset Password</h2>
                    <p className={style.subtitle}>
                        Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce lorem nunc, fringilla sit
                        amet
                        nunc.
                    </p>
                </div>
                <form onSubmit={handleSubmit(submit, error)}>
                    <div className={style.inputs}>
                        <div className={style.firstInput}>
                            <FormInput errors={error} name={'password'} label={'Password'} type={'password'}
                                       register={register} placeHolder={'8+ characters'} eye={true}/>
                        </div>
                        <div className={style.secondInput}>
                            <FormInput errors={errors} name={'confirmPassword'} type={'password'}
                                       label={'Confirm Password'} register={register} eye={true}/>
                        </div>
                    </div>
                    <button type="submit" className={'button'}>
                        <p className={'textBtn'}>Reset Password</p>
                        <BsArrowRightShort color={'white'} size={30}/>
                    </button>
                </form>
            </>}
        </div>
    )
}

export default ResetPassword