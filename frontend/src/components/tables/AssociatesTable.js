import React, { useState } from 'react'
import { Table, Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";
import { Search } from "@material-ui/icons";
import Controls from "../controls/Controls";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MapIcon from '@material-ui/icons/Map';
import GroupIcon from '@material-ui/icons/Group';
import PaymentIcon from '@material-ui/icons/Payment';

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
    { id: 'associateNumber', label: 'Número de Associado' },
    { id: 'name',label: 'Nome'},
    { id: 'nickname', label: 'Alcunha'}, 
    { id: 'fee', label: 'Quota'},
    { id: 'phoneNumber', label: 'Número de Telemóvel'}, 
    { id: 'email', label: 'Email'}, 
    { id: 'active', label: 'Ativo'},
    { id: 'joinedIn', label: "Ano de Entrada" },
    { id: 'actions', label: 'Ações', disableSorting: true }
]

export default function AssociatesTable(props) {
    const classes = useStyles();
    const records = props.records
    const groups = props.groups
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [selectedGroup, setSelectedGroup] = useState('All')

    const openEditPopup = (item) => {
        props.handleEditAssociate(item)
    }

    const openInPopupRemove = (item) => {
        props.handleRemoveAssociate(item)
    }

    const openInUserAddress = (item) => {
        props.handleOpenAssociateAddress(item)
    }

    const openInResetPassword = (item) => {
        props.handleResetAssociatePassword(item)
    }

    const openInUserGroups = (item) => {
        props.handleOpenAssociateGroups(item)
    }

    const openRegistPaymentPopup = (item) => {
        props.handleRegistPayment(item)
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

    const handleSelectGroupChange = e => {
        let groupName = e.target.value
        setSelectedGroup(groupName)
        props.handleSearch(groupName)
    }

    const handleAddAssociate = () => {
        props.handleAddNewAssociate()
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Select
                        name="group"
                        label="Grupo"
                        value={selectedGroup}
                        onChange={handleSelectGroupChange}
                        options={groups}
                    />
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
                        text="Novo Associado"
                        variant="outlined"
                        className={classes.addButton}
                        onClick={() => {handleAddAssociate(null)}}
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
                                    <TableCell>{item.active}</TableCell>
                                    <TableCell>{item.joinedIn}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Registar Pagamento"
                                            className={classes.actionButton}
                                            onClick={() => { openRegistPaymentPopup(item) }}>
                                            <PaymentIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Editar Associado"
                                            className={classes.actionButton}
                                            onClick={() => { openEditPopup(item) }}>
                                            <EditIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Morada"
                                            className={classes.actionButton}
                                            onClick={() => { openInUserAddress(item) }}>
                                            <MapIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Grupos do Associado"
                                            className={classes.actionButton}
                                            onClick={() => { openInUserGroups(item) }}>
                                            <GroupIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Password Reset"
                                            className={classes.actionButton}
                                            onClick={() => { openInResetPassword(item) }}>
                                            <VpnKeyIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Remover Associado"
                                            className={classes.actionButton}
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
        </div>
    )
}