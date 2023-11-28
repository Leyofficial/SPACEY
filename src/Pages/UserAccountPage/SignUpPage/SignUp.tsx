import style from './SignUp.module.scss'
import CustomTab from "../../../Utility/CustomTab/CustomTab.tsx";
import {tabArray} from "../tabArray.ts";
import {FormInput} from "../../../Utility/FormInput/FormInput.tsx";
import {useNavigate} from "react-router-dom";
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import toast, {Toaster} from "react-hot-toast";
import {BsArrowRightShort} from "react-icons/bs";
import {useFormRegister} from "../../../hooks/auth/useFormRegister.ts";
import axios from "axios";

interface MyForm {
    name: string,
    email: string,
    password: string,
    repeatPassword: string
}

function SignUp({callback} : any) {
    const navigate = useNavigate()
    const defaultValues  = ['name' , 'email' , 'password' , 'repeatPassword'];
    const {register , handleSubmit , reset , errors} = useFormRegister(defaultValues);

    // https://spacey-server.vercel.app/auth
    const submit: SubmitHandler<MyForm | any> = data => {
        if (data.password !== data.repeatPassword) {
            toast.error('Password and confirm password should be same');
            return
        }
        axios
            .post('https://spacey-server.vercel.app/auth' , {
                name : data.name,
                email : data.email,
                password : data.password,
                passwordConfirm : data.repeatPassword,
            })
            .then((response) => {
                localStorage.setItem('token' , response.data.token);
                toast.success('Success');
                callback(true);
                navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.response ? error.response.data.message : 'Something went wrong ...';
                toast.error(errorMessage);
                reset()
            });
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
                    <div className={style.econdPassword}>
                        <FormInput errors={errors} name={'repeatPassword'} label={'Confirm Password'}
                                    register={register} type={'password'} eye={true}/>
                    </div>
                </div>
                <button type="submit" className={'button'}>
                    <p className={'textBtn'}>Sign up</p>
                    <BsArrowRightShort color={'white'} size={30}/>
                </button>
            </form>
        </div>
    )
}

export default SignUp