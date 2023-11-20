import {Badge, IconButton} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";


interface ICustomIcon {
    callback? : () => void,
    icon : React.ReactNode,
    isMultiply? : boolean,
    valueMultiply? : number,
    path?:string,
}
// callback
export function CustomIcon ({ icon , isMultiply = false , valueMultiply,path} : ICustomIcon) {
    return (
        <NavLink to={path ? path : '#'}>
        <IconButton onClick={() => console.log('b')} >
            {isMultiply ? <Badge badgeContent={valueMultiply} color="info">
                {icon}
            </Badge> : icon}
        </IconButton>
        </NavLink>
    )
}