import toast from "react-hot-toast";


export function successAction(token: string , navigate: (a: string) => void, callback?: (a: boolean) => void) {
    localStorage.setItem('token', token);
    toast.success('Success');
    setTimeout(() => {
        if (callback) {
            callback(true);
        }
        navigate('/');
    } , 1500)
}

