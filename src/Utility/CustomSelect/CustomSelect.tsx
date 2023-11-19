import {Box, FormControl, InputLabel, NativeSelect} from "@mui/material";

interface ICustomSelectProps{
    items:[string],
    title:string,
    width:number,
}
const CustomSelect = ({items,title,width}:ICustomSelectProps) => {

    return (
        <Box sx={{ width: width }}>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    {title}
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        //@ts-ignore
                        name: {title},
                        id: 'uncontrolled-native',
                    }}
                >
                    {items?.map((item,index) => <option value={index}>{item}</option>)}
                </NativeSelect>
            </FormControl>
        </Box>
    );
};

export default CustomSelect;