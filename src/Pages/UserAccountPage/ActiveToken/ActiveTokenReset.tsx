import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { DoneProgress } from "../../../Utility/CircularProgress/DoneProgress.tsx";
import ErrorProgress from "../../../Utility/CircularProgress/ErrorProgress.tsx";
import style from './ActiveTokenReset.module.scss';
import axios from "axios";

function ActiveTokenReset({ callback }: any) {
    const [isChecked, setChecked] = useState(false);
    const [status, setStatus] = useState(false);
    const [isPending, setPending] = useState<boolean>(false);
    const navigate = useNavigate();
    const { token } = useParams();
    const [tokenToResetPassword , setResetToken] = useState<string | null>(null);
    useEffect(() => {
        if (!tokenToResetPassword) return;
        const handleSuccess = () => {
            setChecked(true);
            setPending(true);
            setStatus(true);
            setTimeout(() => {
                callback(true);
                navigate('/user-account/login/reset-password');
            }, 2500);
        };

        const handleFailure = () => {
            setPending(true);
            setChecked(true);
            setTimeout(() => {
                navigate('/');
            }, 2500);
        };
        debugger
        if (tokenToResetPassword === token) {
            handleSuccess();
        } else {
            handleFailure();
        }
    }, [tokenToResetPassword]);

    useEffect(() => {
        axios.get(`https://spacey-server.vercel.app/auth/find/${token}`).then((res) => {
            if (res.status === 200) {
                setResetToken(res.data.foundUser.randomNumberToUpdatePassword)
            } else {
                setResetToken('error')
            }
        })
    }, []);

    return (
        <div className={style.block}>
            {!isPending ? (
                <CircularProgress />
            ) : status ? (
                <div className={style.doneBlock}>
                    <DoneProgress isChecked={isChecked} />
                </div>
            ) : (
                <div className={style.doneBlock}>
                    <ErrorProgress isChecked={isChecked} />
                </div>
            )}
        </div>
    );
}

export default ActiveTokenReset;
