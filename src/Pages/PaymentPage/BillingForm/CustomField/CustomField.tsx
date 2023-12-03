
import {Field} from "formik";

export interface IFieldProps{
    title?:string,
    htmlFor:string,
    placeholder?:string,
    id:string,
    countries?:[any] | null,
    dataToMap?:string,
    isTextArea?:string,
    typeField?:string,
    validate? :(arg:string) => void
}
const CustomField = ({title,htmlFor,placeholder = "",id,isTextArea,typeField,validate} : IFieldProps) => {
    return (
       <>
           <div style={{width:`100%`,display:'flex',flexDirection:'column',margin:'20px 0'}}>
               <label htmlFor={htmlFor}>{title}</label>
               <Field validate={validate} type={typeField} required={true} component={isTextArea ? isTextArea : null} style={{width:`100%`,outline:'none'}} id={id} name={htmlFor} placeholder={placeholder}></Field>
           </div>

       </>
    );
};

export default CustomField;