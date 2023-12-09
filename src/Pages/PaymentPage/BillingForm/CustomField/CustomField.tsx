
import {Field} from "formik";

export interface IFieldProps{
    title?:string,
    htmlFor:string,
    placeholder?:string,
    id:string,
    countries?:[any] | null,
    dataToMap?:string | any,
    isTextArea?:string,
    typeField?:string,
    validate? :(arg:string) => void,
    required?:boolean
}
const CustomField = ({title,htmlFor,placeholder = "",id,isTextArea,typeField,validate,required = true} : IFieldProps) => {

    return (
       <>
           <div style={{width:`100%`,display:'flex',flexDirection:'column',margin:'20px 0'}}>
               <label htmlFor={htmlFor}>{title}</label>
               <Field validate={validate ? validate : null} type={typeField} required={required} component={isTextArea ? isTextArea : null} style={{width:`100%`,outline:'none'}} id={id} name={htmlFor} placeholder={placeholder}></Field>
           </div>

       </>
    );
};

export default CustomField;