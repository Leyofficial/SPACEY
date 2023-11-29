import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { DoneProgress } from "../../../Utility/CircularProgress/DoneProgress.tsx";
import ErrorProgress from "../../../Utility/CircularProgress/ErrorProgress.tsx";
import style from './ActiveTokenReset.module.scss';

function ActiveTokenReset({ callback }: any) {
    const [isChecked, setChecked] = useState(false);
    const [status, setStatus] = useState(false);
    const [isPending, setPending] = useState<boolean>(false);
    const navigate = useNavigate();
    const { token } = useParams();

    useEffect(() => {
        const tokenLc = localStorage.getItem('token') || '';

        const handleSuccess = () => {
            setChecked(true);
            setPending(false);
            setStatus(true);
            setTimeout(() => {
                callback(true);
                navigate('/user-account/login/reset-password');
            }, 500);
        };

        const handleFailure = () => {
            setPending(true);
            setChecked(true);
            setTimeout(() => {
                navigate('/');
            }, 2500);
        };

        if (tokenLc === token) {
            handleSuccess();
        } else {
            handleFailure();
        }
    }, [token]);

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
