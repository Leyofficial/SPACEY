import {useForm} from "react-hook-form";

export function useFormRegister(array: string[]) {
    const { register, handleSubmit , reset, formState: { errors } } = useForm({
        defaultValues: {
            // Распаковываем значения массива в объект defaultValues
            ...array.reduce((acc, fieldName : string) => {
                // @ts-ignore
                acc[fieldName] = ''; // Устанавливаем пустую строку, вы можете установить любое значение по умолчанию
                return acc;
            }, {}),
        },
    });
   return {register , handleSubmit , errors , reset}
}
