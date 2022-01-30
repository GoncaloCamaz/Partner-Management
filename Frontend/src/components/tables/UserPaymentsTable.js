import React, { useState } from 'react'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import Controls from "../controls/Controls";
import ReceiptIcon from '@material-ui/icons/Receipt';
import generateReceipt from '../pdf/ReceiptGenerator';
import arcumLogo from '../../static/arcum.png'

const useStyles = makeStyles(() => ({
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
    const records = props.rows
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const downloadReceipt = (item) => {
        const name = "Recibo - " + item.paymentDate + ".pdf"
        const content = {
          associateNumber: item.associateNumber,
          associateName: 'Gonçalo Dias Camaz Moreira',
          associateFeeYear: 2021,
          arcumImage: arcumLogo,
          paidValue: item.valueReceived,
          yearsPaid: item.yearsPaid,
          paymentDate: item.paymentDate
        }
    
        var doc = generateReceipt(content)
        doc.save(name)
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
                        label="Procurar"
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
                </TblContainer>
                <TblPagination />
            </Paper>
    )
}