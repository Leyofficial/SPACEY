import style from './TrackOrder.module.scss'
import {FormInput} from "../../Utility/FormInput/FormInput.tsx";
import {useFormRegister} from "../../hooks/auth/useFormRegister.ts";
import {SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import {Toaster} from "react-hot-toast";
import {InfoUser} from "../../Utility/InfoUser/InfoUser.tsx";
import {PiInfo} from "react-icons/pi";
import {BsArrowRightShort} from "react-icons/bs";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import {errorToaster} from "../../Utility/ToasterActions/ErrorToaster.tsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {successToaster} from "../../Utility/ToasterActions/SuccessToaster.tsx";

interface MyForm {
    id: string
    email: string,
}
function TrackOrder() {
    const navigate = useNavigate();
    const defaultValues = ['id', 'email'];
    const {register, handleSubmit, errors} = useFormRegister(defaultValues);
    const submit: SubmitHandler<MyForm> = data => {
        axios.get(`https://spacey-server.vercel.app/processOrder/${data.id}`).then((res) => {
            if (!res?.data?.order?.orderId) return
            if (res.data.order.dataBilling.email === data.email) {
                successToaster()
                setTimeout(() => {
                    navigate('/track-order/' + res.data.order.orderId)
                } , 1500)
            } else {
                errorToaster('There were no orders under this email or order id!');
            }
        }).catch((err) => {
            errorToaster(err.response.data.message);
        } )
    }
    const error: SubmitErrorHandler<MyForm> = () => {
        errorToaster("All inputs required.")
    }

    return (
        <>
            <div className={style.breadCrumb}>
                <BreadCrumb/>
            </div>
            <div className={style.block}>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <div className={style.wrapperBlock}>
                    <div className={style.textBlock}>
                        <h2 className={style.title}>
                            Track Order
                        </h2>
                        <p className={style.subtitle}>
                            To track your order please enter your order ID in the input field below and press the “Track
                            Order” button. this was given to you on your receipt and in the confirmation email you
                            should
                            have received.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(submit, error)}>
                        <div className={style.inputs}>
                            <div className={style.orderId}>
                                <FormInput errors={errors} name={'id'} label={'Order ID'} register={register}
                                           placeHolder={'ID...'}/>
                            </div>
                            <div className={style.email}>
                                <FormInput errors={errors} name={'email'} label={'Billing Email'} register={register}
                                           placeHolder={'Email address'}/>
                            </div>
                        </div>
                        <div className={style.info}>
                            <InfoUser icon={<PiInfo/>} text={'Order ID that we sended to your in your email address.'}/>
                        </div>
                        <button type="submit" className={`button ${style.btn}`}>
                            <p className={'textBtn'}>Track Order</p>
                            <BsArrowRightShort color={'white'} size={30}/>
                        </button>
                    </form>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default TrackOrder