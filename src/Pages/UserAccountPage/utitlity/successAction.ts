import {successToaster} from "../../../Utility/ToasterActions/SuccessToaster.tsx";


export function successAction(token: string , navigate: (a: string) => void, callback?: (a: boolean) => void) {
    localStorage.setItem('token', token);
    successToaster();
    setTimeout(() => {
        if (callback) {
            callback(true);
        }
        navigate('/');
    } , 1500)
}

