import {Pagination} from "@mui/material";
import style from './CustomPagination.module.scss'
import React from "react";
interface ICustomPagination {
    count : number,
    page : number,
    callback: (event: React.ChangeEvent<unknown>, value: number) => void;
}
export function CustomPagination ({count , callback , page } : ICustomPagination){
    return <div className={style.block}> <Pagination count={count} page={page} onChange={callback} variant="outlined" color="primary" /></div>
}