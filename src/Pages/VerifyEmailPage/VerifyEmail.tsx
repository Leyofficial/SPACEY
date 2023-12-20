import style from './VerifyEmail.module.scss'
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import {useEffect, useState} from "react";
import InputCode from 'react-input-code';
import './VerifyCode.scss'
import axios from "axios";
import {useAppSelector} from "../../redux/hooks/hooks.ts";
import {successToaster} from "../../Utility/ToasterActions/SuccessToaster.tsx";
import {errorToaster} from "../../Utility/ToasterActions/ErrorToaster.tsx";
function VerifyEmail() {
    const {user} = useAppSelector((state) => state.user);
    const [code, setCode] = useState('');

    useEffect(() => {
        if (!user) return;
        axios.post('https://spacey-server.vercel.app/auth/confirmEmall' , {
            email : user.email
        }).then((res) => {
            console.log(res)
            successToaster(res.data.message);
        }).catch((err) => {
            console.log(err)
        });
    }, []);

    function handleClick() {
        axios.patch('https://spacey-server.vercel.app/auth/confirmEmall' , {
            email : user.email,
            codeToConfirm : [...code]
        }).then((res) => {
            console.log(res);
            successToaster(res.data.message);
        }).catch((err) => {
            console.log(err);
            errorToaster(err.data.response.message);
        })
    }

    const handleChange = (value: string) => {
        // Обновляем состояние кода при изменении
        setCode(value);
    };

    return (
        <div className={style.block}>
            <div className={style.wrapperBlock}>
                <div className={style.textBlock}>
                    <h2 className={style.title}>Verify Your Email Address</h2>
                    <p className={style.subtitle}>We will send you an email within 5 minutes</p>
                </div>
                <div className={style.actionBlock}>
                    <h2 className={style.actionInfo}>Verification Code</h2>
                    <div className={style.codeFromEmail}>
                        <InputCode
                            onChange={handleChange} // Обработчик изменения кода
                            value={code} // Текущее значение кода
                            nItems={6} type={'text'}
                            autoFocus={true}
                        />
                    </div>
                    <div onClick={handleClick} className={style.btn}>
                        <CustomBtn blockWidth={'100%'} text={'verify me'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail