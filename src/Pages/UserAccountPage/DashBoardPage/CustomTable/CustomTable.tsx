import { styled } from '@mui/material/styles';
import style from './CustomTable.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {NavLink} from "react-router-dom";
import {FaArrowRightLong} from "react-icons/fa6";
import {useEffect, useState} from "react";
import {CheckStatus} from "../CheckStatus/CheckStatus.tsx";
import {formatOrderDate} from "../../../../Utility/Date/formatOrderDate.ts";

interface IOutsideTable {
    array : ICustomTable[] | null
}
export interface ICustomTable {
    action?: string;
    orderId: string,
    status : string,
    date: Date,
    total : number | string,
    pathForLink : string,
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#2DA5F3',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    orderId: string,
    status: string,
    date: Date,
    total: number | string,
    action: string,
) {
    return { orderId, status , date , total , action};
}

export default function CustomizedTables({array} : IOutsideTable) {
    const [link , setLink ] = useState('');
    const [rows , setRows] = useState<ICustomTable[] | null>([]);
    useEffect(() => {
        if (!array) return
        const rowsData = [
            array.map((item : ICustomTable) => {
                const date = new Date(item.date);
                setLink(item.pathForLink)
               return  createData(item.orderId , item.status.toUpperCase() , date , item.total , 'View Details' );
            })
        ];
        // @ts-ignore
        setRows(...rowsData)
    },[])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ORDER ID</StyledTableCell>
                        <StyledTableCell align="center">STATUS</StyledTableCell>
                        <StyledTableCell align="center">DATE</StyledTableCell>
                        <StyledTableCell align="center">TOTAL</StyledTableCell>
                        <StyledTableCell align="center">ACTION</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <StyledTableRow key={row.orderId}>
                            <StyledTableCell component="th" scope="row">
                                {row.orderId}
                            </StyledTableCell>
                            <StyledTableCell align="center">{CheckStatus(row.status)}</StyledTableCell>
                            <StyledTableCell align="center">{formatOrderDate(row.date)}</StyledTableCell>
                            <StyledTableCell align="center">{row.total}</StyledTableCell>
                            <StyledTableCell align="center"><NavLink className={style.link} to={link}>
                                <div className={style.linkBlock}>
                                    {row.action}
                                    <FaArrowRightLong color={'#2DA5F3'} />
                                </div>
                            </NavLink></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}