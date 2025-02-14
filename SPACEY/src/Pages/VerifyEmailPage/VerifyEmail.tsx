import style from "./VerifyEmail.module.scss";
import CustomBtn from "../../Utility/CustomBtn/CustomBtn.tsx";
import { useEffect, useState } from "react";
import "./VerifyCode.scss";
import axios from "axios";
import { useAppSelector } from "../../redux/hooks/hooks.ts";
import { successToaster } from "../../Utility/ToasterActions/SuccessToaster.tsx";
import { errorToaster } from "../../Utility/ToasterActions/ErrorToaster.tsx";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function VerifyEmail() {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    if (!user.email) return;
    axios
      .post("https://spacey-server-two.vercel.app/auth/confirmEmail", {
        email: user?.email,
      })
      .then((res) => {
        successToaster(res.data.message);
      })
      .catch((err) => {
        errorToaster(err.response.data.message);
      });
  }, [user]);

  function handleClick() {
    axios
      .patch("https://spacey-server-two.vercel.app/auth/confirmEmail", {
        email: user.email,
        codeToConfirm: code,
      })
      .then((res) => {
        successToaster(res.data.message);
        setTimeout(() => {
          navigate("/user-account/dashboard");
        }, 2000);
      })
      .catch((err) => {
        errorToaster(err.response.data.message);
      });
  }

  const handleChange = (value: string) => {
    setCode(value);
  };

  return (
    <div className={style.block}>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={style.wrapperBlock}>
        <div className={style.textBlock}>
          <h2 className={style.title}>Verify Your Email Address</h2>
          <p className={style.subtitle}>
            We will send you an email within 2 minutes , if email still didn`t
            arrived check spam!{" "}
          </p>
        </div>
        <div className={style.actionBlock}>
          <h2 className={style.actionInfo}>Verification Code</h2>
          <div className={style.codeFromEmail}>
            <input
              className={style.input}
              type="text"
              onChange={(e) => handleChange(e.target.value)}
              value={code}
            />
          </div>
          <div onClick={handleClick} className={style.btn}>
            <CustomBtn blockWidth={"100%"} text={"verify me"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
