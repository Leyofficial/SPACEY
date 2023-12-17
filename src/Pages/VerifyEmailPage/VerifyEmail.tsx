import style from './VerifyEmail.module.scss'
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import {useState} from "react";
import InputCode from 'react-input-code';
import './VerifyCode.scss'
function VerifyEmail() {
    const [code, setCode] = useState('');
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
                    <div className={style.btn}>
                        <CustomBtn blockWidth={'100%'} text={'verify me'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail