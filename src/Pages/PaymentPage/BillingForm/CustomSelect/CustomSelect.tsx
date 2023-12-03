import {Field} from "formik";
import FormControl from "@mui/material/FormControl";
import {NativeSelect} from "@mui/material";
import {IFieldProps} from "../CustomField/CustomField.tsx";
import style from './CustomSelect.module.scss'
const CustomSelectForm = ({title,htmlFor,id,countries,dataToMap} : IFieldProps) => {
    const getValue = (object : any, path : string) => path.split('.').reduce((o : any, p : any) => (o || {})[p], object);
    return (
        <>
            <div style={{width:`100%`,display:'flex',flexDirection:'column'}}>
                <p className={style.label}>{title}</p>
                <Field id={id} name={htmlFor} required={true} >
                    {({ field } : any) => (
                        <FormControl fullWidth {...field}>
                            <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    id: 'uncontrolled-native',
                                }}
                                required={true}
                            >
                                <option disabled={true}></option>
                                {countries && countries.map((country,index) => {
                                    const value = getValue(country ,dataToMap);
                                    return value && <option value={index}>{value}</option>
                                })}
                            </NativeSelect>
                        </FormControl>
                    )}
                </Field>
            </div>
        </>
    );
};

export default CustomSelectForm
