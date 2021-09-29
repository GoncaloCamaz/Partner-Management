import React, { useState } from 'react'
import { Table, Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import Controls from "../controls/Controls";
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles(theme => ({
    pageContent: {
        overflowY: 'scroll',
        paddingTop: '20px'
    },
    container: {
        maxHeight: '300px',
    },
    searchInput: {
        width: '50%'
    }
}))

const headCells = [
    { id: 'paymentDate', label: 'Data' },
    { id: 'valueReceived',label:'Recebido (€)'},
    { id: 'yearsPaid', label: 'Anos Pagos'}, 
    { id: 'actions', label: 'Recibo', disableSorting: true }
]

export default function UserPaymentsTable(props) {
    const classes = useStyles();
    const records = [{paymentDate: "27/01/2015", valueReceived: 200, yearsPaid: 10}]//props.rows
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const downloadReceipt = (item) => {
        console.log(item)
    }

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === null || target.value === '' || target.value === ' ')
                    return items;
                else
                {
                    let filtered = items.filter(value => {
                        return (
                            value.paymentDate.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.valueReceived.toString().toLowerCase().includes(target.value.toLowerCase()) 
                        );
                    })
                    return filtered      
                }
            }
        })
    }

    return (
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input
                        label="Search"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
                <TblContainer className={classes.container}>
                <Table stickyHeader>
                    <TblHead />
                    <TableBody>
                        { 
                            recordsAfterPagingAndSorting().map((item, index) => {
                                return (<TableRow key={index}>
                                    <TableCell>{item.paymentDate}</TableCell>
                                    <TableCell>{item.valueReceived}</TableCell>
                                    <TableCell>{item.yearsPaid}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Download"
                                            onClick={() => { downloadReceipt(item) }}>
                                            <ReceiptIcon fontSize="medium" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            })
                        }
                    </TableBody>
                    </Table>
                </TblContainer>
                <TblPagination />
            </Paper>
    )
}