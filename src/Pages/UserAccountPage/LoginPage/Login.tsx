// Login.tsx

import style from './Login.module.scss'
import {FormInput} from "../../../Utility/FormInput/FormInput.tsx";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import toast, {Toaster} from "react-hot-toast";

interface MyForm {
    email : string,
    password : string
}
function Login() {
    const {register, handleSubmit , formState : {errors}} = useForm<MyForm>({
        defaultValues: {
            email : '',
            password : '',
        },
    })

    const submit: SubmitHandler<MyForm> = data => {
        toast.success('Success !')
        console.log(data)
    }
    const error : SubmitErrorHandler<MyForm> = () => {
        toast.error("All inputs required.")
    }

    return (
        <div className={style.block}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <form onSubmit={handleSubmit(submit , error)}>
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
                </div>
                <button type="submit" className={style.button}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;
