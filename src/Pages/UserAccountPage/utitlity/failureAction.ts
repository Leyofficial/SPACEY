import {errorToaster} from "../../../Utility/ToasterActions/ErrorToaster.tsx";

export function failureAction(error: {
    response: {
        data: {
            message: string
        }
    }
}, reset : () => void) {
    const errorMessage = error.response ? error.response.data.message : 'Something went wrong ...';
    errorToaster(errorMessage);
    reset()
}