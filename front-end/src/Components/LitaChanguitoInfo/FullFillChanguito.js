import React from "react";

// Table
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import Delete from "@mui/icons-material/Delete";

export default function FullFillChanguito({ producto, deleteProducto }) {

    return (
        <TableRow
            key={producto}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {producto}
            </TableCell>
            <TableCell align="center">{producto}</TableCell>
            <TableCell align="center"><Button onClick={deleteProducto}><Delete /></Button></TableCell>
        </TableRow>
    )
}