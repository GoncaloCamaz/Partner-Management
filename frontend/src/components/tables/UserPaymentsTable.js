import React, { useState } from 'react'
import { Table, Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import Controls from "../controls/Controls";
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles(theme => ({
    pageContent: {
        overflowY: 'scroll',
        margin: theme.spacing(0),
        padding: theme.spacing(3),
        width: '90%',
        maxWidth: '80%'
    },
    container: {
        maxHeight: '300px',
    },
    searchInput: {
        width: '30%'
    }
}))

const headCells = [
    { id: 'payment_date', label: 'Date' },
    { id: 'value_received',label:'Value'},
    { id: 'years_paid', label: 'Years Paid'}, 
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function UserPaymentsTable(props) {
    const classes = useStyles();
    const records = [{payment_date: "27/01/2015", value_received: 200, years_paid: 10}]//props.rows
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
                            value.payment_date.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.value_received.toString().toLowerCase().includes(target.value.toLowerCase()) 
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
                                    <TableCell>{item.payment_date}</TableCell>
                                    <TableCell>{item.value_received}</TableCell>
                                    <TableCell>{item.years_paid}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Download Receipt"
                                            onClick={() => { downloadReceipt(item) }}>
                                            <ReceiptIcon fontSize="small" />
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