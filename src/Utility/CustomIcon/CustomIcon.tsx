import {Badge, IconButton} from "@mui/material";
import React from "react";


interface ICustomIcon {
    callback? : () => void,
    icon : React.ReactNode,
    isMultiply? : boolean,
    valueMultiply? : number
}
// callback
export function CustomIcon ({ icon , isMultiply = false , valueMultiply} : ICustomIcon) {
    return (
        <IconButton onClick={() => console.log('b')} >
            {isMultiply ? <Badge badgeContent={valueMultiply} color="info">
                {icon}
            </Badge> : icon}
        </IconButton>
    )
}