import React, { useState } from 'react'
import { Table, Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import Controls from "../controls/Controls";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';

const useStyles = makeStyles(theme => ({
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
        position: 'absolute',
        right: 0,
        color: '#fff',
        background: 'rgb(26, 23, 89)',
        '&:hover': {
            background: "#1888ff"
          }
    }
}))

const headCells = [
    { id: 'name', label: 'Nome' },
    { id: 'startDate', label: 'Início da Parceria'}, 
    { id: 'active', label: 'Ativa'},
    { id: 'phoneNumber', label: 'Número de Telemóvel'}, 
    { id: 'email', label: 'Email'}, 
    { id: 'actions', label: 'Ações', disableSorting: true }
]

export default function PartnershipsTable(props) {
    const classes = useStyles();
    const records = props.rows
    
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const openAddPopup = (item) => {
        props.handleAddPartnership(item)
    }

    const openSeeAddresses = (item) => {
        props.handleSeeAddresses(item)
    }

    const openEditPopup = (item) => {
        console.log(item)
        props.handleEditPartnership(item)
    }

    const openRemovePopup = (item) => {
        props.handleRemovePartnership(item)
    }

    const openAdvantagesPopup = (item) => {
        props.handleSeeAdvantages(item)
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
                            value.name.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.email.toString().toLowerCase().includes(target.value.toLowerCase()) || 
                            value.phoneNumber.toString().toLowerCase().includes(target.value.toLowerCase()) 
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
                        text="Nova Parceria"
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
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.startDate}</TableCell>
                                    <TableCell>{item.active}</TableCell>
                                    <TableCell>{item.phoneNumber}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Moradas"
                                            className={classes.editButton}
                                            onClick={() => { openSeeAddresses(item) }}>
                                            <MapIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Vantagens"
                                            className={classes.editButton}
                                            onClick={() => { openAdvantagesPopup(item) }}>
                                            <ListIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Editar Parceria"
                                            className={classes.editButton}
                                            onClick={() => { openEditPopup(item) }}>
                                            <EditIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Remover Parceria"
                                            className={classes.removeButton}
                                            onClick={() => { openRemovePopup(item) }}>
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