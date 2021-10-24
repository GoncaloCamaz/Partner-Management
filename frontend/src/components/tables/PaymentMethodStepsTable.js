import React, { useState } from 'react'
import { Table, Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import Controls from "../controls/Controls";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    pageContent: {
        overflowY: 'scroll',
        paddingTop: '20px',
        width: '100%'
    },
    container: {
        maxHeight: '300px',
    },
    searchInput: {
        width: '30%'
    },
    addButton: {
        position: 'relative',
        left: '50%',
        color: '#fff',
        background: 'rgb(26, 23, 89)',
        '&:hover': {
            background: "#1888ff"
          }
    }
}))

const headCells = [
    { id: 'step_id',label: 'Ordem'},
    { id: 'step_name',label: 'Descrição'},
    { id: 'actions', label: 'Ações', disableSorting: true }
]

export default function PaymentMethodStepsTable(props) {
    const classes = useStyles();
    console.log(props.rows)
    const records = props.rows
    
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const openAddPopup = (item) => {
        props.handleAddPaymentMethodStep(item)
    }

    const openEditPopup = (item) => {
        props.handleEditPaymentMethodStep(item)
    }

    const openInPopupRemove = (item) => {
        props.handleRemovePaymentMethodStep(item)
    }

    const returnToPayments = () => {
        props.handleReturnToPaymentMethods()
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
                            value.step_id.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.step_name.toString().toLowerCase().includes(target.value.toLowerCase())
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
                    <Controls.Button
                        text="Regressar"
                        variant="outlined"
                        className={classes.addButton}
                        onClick={returnToPayments}
                    />
                    <Controls.Button
                        text="Novo Passo"
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
                                    <TableCell>{item.step_id}</TableCell>
                                    <TableCell>{item.step_name}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Editar Passo"
                                            className={classes.editButton}
                                            onClick={() => { openEditPopup(item) }}>
                                            <EditIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Remover Passo"
                                            className={classes.removeButton}
                                            onClick={() => { openInPopupRemove(item) }}>
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
    )
}