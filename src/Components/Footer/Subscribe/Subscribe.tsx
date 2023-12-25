import style from "./Subscribe.module.scss";
import CustomBtn from "../../../Utility/CustomBtn/CustomBtn.tsx";
import {useState} from "react";
import {brandImages} from "./brandList.ts";
import {subscribe} from "../../../ApiRequests/User/User.ts";
import {errorToaster} from "../../../Utility/ToasterActions/ErrorToaster.tsx";
import {Toaster} from "react-hot-toast";
import {successToaster} from "../../../Utility/ToasterActions/SuccessToaster.tsx";

const Subscribe = () => {
    const [email, setEmail] = useState<string>("")

    const subscribeHandler = () => {
        if (email.length > 6) {
            subscribe(email).then(res => {
                if(res.status === 200){
                    successToaster('Succeed')
                    setEmail("")
                }
            }).catch(() => {
                errorToaster('You have been already subscribed')
            })
        } else {
            errorToaster('Email should be longer')
        }

    }
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <section className={style.subscribe}>
                <h1>Subscribe to our newsletter</h1>
                <p className={style.description}>We will share with you our new products.You will be able
                    to buy them almost for free.
                </p>
                <form>
                    <div className={style.inputWrapper}>
                        <input placeholder={'Email address'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <CustomBtn callback={subscribeHandler} text={"SUBSCRIBE"}></CustomBtn>
                    </div>
                </form>
                <span className={style.line}></span>
                <div className={style.brands}>
                    {brandImages.map((brand: string, index: number) => <img key={index} src={brand}
                                                                            alt={'brand'}></img>)}
                </div>
            </section>
        </>
    )
}
export default Subscribe