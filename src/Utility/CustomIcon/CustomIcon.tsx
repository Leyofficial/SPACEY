import {Badge, IconButton} from "@mui/material";
import {PiBasket} from "react-icons/pi";
import React from "react";


interface ICustomIcon {
    callback? : () => void,
    icon : React.ReactNode,
    isMultiply? : boolean,
    valueMultiply? : number
}
export function CustomIcon ({callback  , icon , isMultiply = false , valueMultiply} : ICustomIcon) {
    return (
        <IconButton onClick={() => console.log('b')} >
            {isMultiply ? <Badge badgeContent={valueMultiply} color="info">
                {icon}
            </Badge> : icon}

        </IconButton>
    )
}