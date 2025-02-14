import {successToaster} from "../../../Utility/ToasterActions/SuccessToaster.tsx";

export function successAction(token : string , navigate : any ,  to = '/' , callback : any) {
    localStorage.setItem('token', token);
    successToaster();
    setTimeout(() => {
            callback(true);
        navigate(to || '/');
    } , 1500)
}

