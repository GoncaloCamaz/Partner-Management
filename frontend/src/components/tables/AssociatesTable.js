import React, { useState } from 'react'
import { Table, Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import Controls from "../controls/Controls";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MapIcon from '@material-ui/icons/Map';

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
    { id: 'associateNumber', label: 'Associate Number' },
    { id: 'name',label: 'Name'},
    { id: 'nickname', label: 'Nickname'}, 
    { id: 'fee', label: 'Fee'},
    { id: 'phoneNumber', label: 'Phone'}, 
    { id: 'email', label: 'Email'}, 
    { id: 'joinedIn', label: "Joined In" },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function UserPaymentsTable(props) {
    const classes = useStyles();
    const records = [
        {
            associateNumber: 123, 
            name: "Gonçalo Camaz", 
            nickname: "Miadas", 
            fee: "2021", 
            phoneNumber: "914049105", 
            email: "gcamaz@sapo.pt",
            joinedIn: "2017"
        }
    ]//props.rows
    
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const openEditPopup = (item) => {
        console.log(item)
    }

    const openInPopupRemove = (item) => {
        console.log(item)
    }

    const openInUserAddresss = (item) => {
        console.log(item)
    }

    const openInResetPassword = (item) => {
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
                            value.associateNumber.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.name.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.nickname.toString().toLowerCase().includes(target.value.toLowerCase()) ||
                            value.fee.toString().toLowerCase().includes(target.value.toLowerCase()) ||
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
                                    <TableCell>{item.associateNumber}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.nickname}</TableCell>
                                    <TableCell>{item.fee}</TableCell>
                                    <TableCell>{item.phoneNumber}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.joinedIn}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Edit User"
                                            className={classes.editButton}
                                            onClick={() => { openEditPopup(item) }}>
                                            <EditIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="User Address"
                                            className={classes.removeButton}
                                            onClick={() => { openInUserAddresss(item) }}>
                                            <MapIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Reset Password"
                                            className={classes.removeButton}
                                            onClick={() => { openInResetPassword(item) }}>
                                            <VpnKeyIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Remove User"
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