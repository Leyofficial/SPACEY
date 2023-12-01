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
    const [tokenToResetPassword , setResetToken] = useState<string | null | any>(null);
    useEffect(() => {
        const handleSuccess = () => {
            setChecked(true);
            setPending(true);
            setStatus(true);
            setTimeout(() => {
                callback(true);
                navigate(`/user-account/login/reset-password?id=${tokenToResetPassword._id}`);
            }, 2500);
        };
        const handleFailure = () => {
            setPending(true);
            setChecked(true);
            setTimeout(() => {
                navigate('/');
            }, 2500);
        };

        if (!tokenToResetPassword){
            handleFailure();
            return
        }

        if (tokenToResetPassword.randomNumberToUpdatePassword === token) {
            handleSuccess();
        } else {
            handleFailure();
        }
    }, [tokenToResetPassword]);

    useEffect(() => {
        axios.get(`https://spacey-server.vercel.app/auth/find/${token}`).then((res) => {
            console.log(res)
            if (res.status === 200 && res.data.foundUser) {
                setResetToken(res.data.foundUser)
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
