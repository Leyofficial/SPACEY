import toast from "react-hot-toast";

export function failureAction(error: {
    response: {
        data: {
            message: string
        }
    }
}, reset : () => void) {
    const errorMessage = error.response ? error.response.data.message : 'Something went wrong ...';
    toast.error(errorMessage);
    reset()
}