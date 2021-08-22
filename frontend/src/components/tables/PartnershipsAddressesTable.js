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
    { id: 'address',label: 'Address'},
    { id: 'city',label: 'City'},
    { id: 'postalCode',label: 'Postal Code'},
    { id: 'latitude',label: 'Latitude'},
    { id: 'longitude',label: 'Longitude'},
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function PartnershipsAddressesTable(props) {
    const classes = useStyles();
    const records = [
        {
            address: "Tuna Universitária do Minho",
            city: "TUM",
            postalCode: "1234-111",
            latitude: "lat",
            longitude: "lon"
        }
    ]//props.rows
    
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const openEditPopup = (item) => {
        console.log(item)
    }

    const openInPopupRemove = (item) => {
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
                                    <TableCell>{item.address}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>{item.postalCode}</TableCell>
                                    <TableCell>{item.latitude}</TableCell>
                                    <TableCell>{item.longitude}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Edit Address"
                                            className={classes.editButton}
                                            onClick={() => { openEditPopup(item) }}>
                                            <EditIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Remove Address"
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