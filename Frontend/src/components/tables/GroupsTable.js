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
        width: '100%',
        height: '100%',
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
    { id: 'name',label: 'Nome'},
    { id: 'initials',label: 'Iniciais'},
    { id: 'imageURL', label: 'URL da Imagem'},
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function GroupsTable(props) {
    const classes = useStyles();
    const records = [
        {
            name: "Tuna Universitária do Minho",
            initials: "TUM",
            imageURL: "https://image.png"
        }
    ]//props.rows
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const openEditPopup = (item) => {
        console.log(item)
        props.handleGroupEdit(item)
    }

    const openInPopupRemove = (item) => {
        console.log(item)
        props.handleGroupRemove(item)
    }

    const openInAddPopup = () => {
        props.handleAddGroup()
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
                            value.initials.toString().toLowerCase().includes(target.value.toLowerCase()) 
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
                        text="Adicionar Grupo"
                        variant="outlined"
                        className={classes.addButton}
                        onClick={() => {openInAddPopup(null)}}
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
                                    <TableCell>{item.initials}</TableCell>
                                    <TableCell>{item.imageURL}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Editar Grupo"
                                            onClick={() => { openEditPopup(item) }}>
                                            <EditIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="primary"
                                            title="Remover Grupo"
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