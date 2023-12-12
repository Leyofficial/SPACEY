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
    status : string,
    date: string,
    total : number | string,
    action : number,
) {
    return { orderId, status , date , total , action};
}

const rows = [
    createData('#96459761', 'IN PROGRESS', 'Dec 30, 2019 05:18', '$1,500 (5 Products)', 'View Details'),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
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
                    {rows.map((row) => (
                        <StyledTableRow key={row.orderId}>
                            <StyledTableCell component="th" scope="row">
                                {row.orderId}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.status}</StyledTableCell>
                            <StyledTableCell align="center">{row.date}</StyledTableCell>
                            <StyledTableCell align="center">{row.total}</StyledTableCell>
                            <StyledTableCell align="center"><NavLink className={style.link} to={'/'}>
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