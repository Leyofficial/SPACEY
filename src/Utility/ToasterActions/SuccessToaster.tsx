import toast from "react-hot-toast";

export const successToaster = (text : string = 'Success !') => {
    toast.success(text);
};