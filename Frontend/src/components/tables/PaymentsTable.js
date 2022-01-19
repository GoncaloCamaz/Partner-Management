import React, { useState } from 'react'
import { Table, Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import Controls from "../controls/Controls";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflowX: 'scroll',
    },
    pageContent: {
        overflowY: 'scroll',
        width: '100%',
        paddingTop: '20px'
    },
    container: {
        maxHeight: '300px',
    },
    searchInput: {
        width: '30%'
    },
    addButton: {
        position: 'relative',
        left: '45%',
        color: '#fff',
        background: 'rgb(26, 23, 89)',
        '&:hover': {
            background: "#1888ff"
          }
    }
}))

const headCells = [
    { id: 'associateNumber', label: 'Associate Number' },
    { id: 'associateName', label: 'Nome' },
    { id: 'paymentDate', label: 'Data de Pagamento' },
    { id: 'valueReceived',label:'Valor Recebido'},
    { id: 'yearsPaid', label: 'Anos Pagos'}, 
    { id: 'actions', label: 'Ações', disableSorting: true }
]

export default function PaymentsTable(props) {
    const classes = useStyles();
    const records = props.rows
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const openAddPopup = (item) => {
        props.handleOpenAddPayment(item)
    }

    const openInEditPopup = (item) => {
        props.handleEditPayment(item)
    }

    const openInRemovePopup = (item) => {
        props.handleRemovePayment(item)
    }

    const returnToPayments = () => {
        props.handleReturnToPayments()
    }

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
                            value.associateNumber.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.associateName.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.associateGroup.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.paymentDate.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.value_received.toString().toLowerCase().includes(target.value.toLowerCase()) 
                        );
                    })
                    return filtered      
                }
            }
        })
    }

    return (
        <div className={classes.root}>
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
                    <Controls.Button
                        text="Regressar"
                        variant="outlined"
                        className={classes.addButton}
                        onClick={returnToPayments}
                    />
                    <Controls.Button
                        text="Registar Pagamento"
                        variant="outlined"
                        className={classes.addButton}
                        onClick={() => {openAddPopup(null)}}
                    />
                </Toolbar>
                <TblContainer className={classes.container}>
                <Table stickyHeader>
                    <TblHead />
                    <TableBody>
                        { 
                            recordsAfterPagingAndSorting().map((item, index) => {
                                return (<TableRow key={index}>
                                    <TableCell>{item.associateNumber}</TableCell>
                                    <TableCell>{item.associateName}</TableCell>
                                    <TableCell>{item.paymentDate}</TableCell>
                                    <TableCell>{item.valueReceived}</TableCell>
                                    <TableCell>{item.yearsPaid}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Edit Payment"
                                            className={classes.editButton}
                                            onClick={() => { openInEditPopup(item) }}>
                                            <EditIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Remove Payment"
                                            className={classes.removeButton}
                                            onClick={() => { openInRemovePopup(item) }}>
                                            <DeleteIcon fontSize="small" />
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
        </div>
    )
}