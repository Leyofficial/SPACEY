import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { DoneProgress } from "../../../Utility/CircularProgress/DoneProgress.tsx";
import ErrorProgress from "../../../Utility/CircularProgress/ErrorProgress.tsx";
import style from './ActiveTokenReset.module.scss';
import axios from "axios";
import {ICallbackAccount} from "../../../Routers/UserAccount/UserAccount.tsx";

function ActiveTokenReset({ callback }: ICallbackAccount) {
    const [isChecked, setChecked] = useState(false);
    const [status, setStatus] = useState(false);
    const [isPending, setPending] = useState<boolean>(false);
    const navigate = useNavigate();
    const { token } = useParams();
    const [tokenToResetPassword , setResetToken] = useState<string | null | any>(null);
    useEffect(() => {
        if (!tokenToResetPassword) return
        const handleSuccess = () => {
            setChecked(true);
            setPending(true);
            setStatus(true);
            setTimeout(() => {
                callback(true);
                navigate(`/user-account/login/reset-password?id=${tokenToResetPassword.foundUser._id}`);
            }, 2500);
        };
        const handleFailure = () => {
            setPending(true);
            setChecked(true);
            setTimeout(() => {
                callback(false)
                // navigate('/');
            }, 2500);
        };

        if (!tokenToResetPassword?.foundUser) {
            handleFailure();
        }

        if (tokenToResetPassword?.foundUser?.randomNumberToUpdatePassword === token) {
            handleSuccess();
        } else {
            handleFailure();
        }
    }, [tokenToResetPassword]);

    useEffect(() => {
        axios.get(`https://spacey-server.vercel.app/auth/find/${token}`).then((res) => {
            if (res.status === 200) {
                setResetToken(res.data)
            } else {
                setResetToken(null)
            }
        })
    }, []);

    return (
        <div className={style.block}>
            {!isPending ? (
                <CircularProgress />
            ) : (
                <div className={style.doneBlock}>
                    {status ? (
                        <DoneProgress isChecked={isChecked} />
                    ) : (
                        <ErrorProgress isChecked={isChecked} />
                    )}
                </div>
            )}
        </div>
    );
}

export default ActiveTokenReset;
