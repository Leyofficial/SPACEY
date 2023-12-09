import toast from "react-hot-toast";

export const errorToaster = (text : string = 'All inputs required.') => {
    toast.error(text);
};