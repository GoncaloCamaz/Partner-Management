import React, { useState } from 'react'
import { Table, Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import Controls from "../controls/Controls";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';

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
    { id: 'name', label: 'Name' },
    { id: 'starDate', label: 'Start Date'}, 
    { id: 'active', label: 'Active'},
    { id: 'phoneNumber', label: 'Phone'}, 
    { id: 'email', label: 'Email'}, 
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function PartnershipsTable(props) {
    const classes = useStyles();
    const records = [
        {
            name: "Tasquinha", 
            startDate: "27/12/2019",
            active: "true", 
            email: "gcamaz@sapo.pt",
            phoneNumber: "123123123"
        }
    ]//props.rows
    
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const openEditPopup = (item) => {
        console.log(item)
    }

    const openInPopupRemove = (item) => {
        console.log(item)
    }

    const openAdvantagesPopup = (item) => {
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
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.startDate}</TableCell>
                                    <TableCell>{item.active}</TableCell>
                                    <TableCell>{item.phoneNumber}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Advantages List"
                                            className={classes.editButton}
                                            onClick={() => { openEditPopup(item) }}>
                                            <ListIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Edit Partnerhsip"
                                            className={classes.editButton}
                                            onClick={() => { openAdvantagesPopup(item) }}>
                                            <EditIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Remove Partnership"
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