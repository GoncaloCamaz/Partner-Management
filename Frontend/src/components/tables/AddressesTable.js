import React, { useState } from 'react'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
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
    { id: 'address',label: 'Morada'},
    { id: 'city',label: 'Cidade'},
    { id: 'postalCode',label: 'Código Postal'},
    { id: 'latitude',label: 'Latitude'},
    { id: 'longitude',label: 'Longitude'},
    { id: 'actions', label: 'Ações', disableSorting: true }
]

export default function AddressesTable(props) {
    const classes = useStyles();
    const records = props.records
    
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const openAddPopup = (item) => {
        props.handleAddAddress(item)
    }

    const openEditPopup = (item) => {
        props.handleEditAddress(item)
    }

    const openInPopupRemove = (item) => {
        props.handleRemoveAddress(item)
    }

    const returnToPartnerships = () => {
        props.handleReturnToPartnerships()
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
                            value.address.toString().toLowerCase().includes(target.value.toLowerCase()) || 
                            value.city.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.postalCode.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.latitude.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.longitude.toString().toLowerCase().includes(target.value.toLowerCase()) 
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
                        onClick={returnToPartnerships}
                    />
                    <Controls.Button
                        text="Nova Morada"
                        variant="outlined"
                        className={classes.addButton}
                        onClick={() => {openAddPopup(null)}}
                    />
                </Toolbar>
                <TblContainer className={classes.container}>
                    <TblHead />
                    <TableBody>
                        { 
                            recordsAfterPagingAndSorting().map((item, index) => {
                                return (<TableRow key={index}>
                                    <TableCell>{item.address}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>{item.postalCode}</TableCell>
                                    <TableCell>{item.latitude}</TableCell>
                                    <TableCell>{item.longitude}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Editar Morada"
                                            className={classes.editButton}
                                            onClick={() => { openEditPopup(item) }}>
                                            <EditIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Remover Morada"
                                            className={classes.removeButton}
                                            onClick={() => { openInPopupRemove(item) }}>
                                            <DeleteIcon fontSize="small" />
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