import toast from "react-hot-toast";


export const errorToaster = (text : string = 'Something went wrong :(') => {
    toast.error(text);
};