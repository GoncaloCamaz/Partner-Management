import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PartnershipsList from '../menus/PartnershipsList'
import Map from '../map/Map'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridcontainer: {
    textAlign: 'center',
  },
  paper: {
    backgroundColor: '#060b26',
    color: theme.palette.text.secondary,
  },
  associate: {
      color: "#fff"
  }
}));

export default function PartnershipGrid() {
  const classes = useStyles();
  const listPartnerships = [
    {
      name: "Tasquinha Bracarense",
      category: "Alimentar",
    },
    {
      name: "VideoNorte",
      category: "Papelaria",
    },
    {
        name: "Oculista",
        category: "Saúde"
    }
]

    const updateSelected = (name) => {
        console.log(name)
    }

  return (
    <div className={classes.root}>
        <Grid container spacing={3} className={classes.gridcontainer}>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <PartnershipsList partnerships={listPartnerships} updateSelected={updateSelected}/>
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
                Lista Vantagens
                <Map />
            </Grid>
        </Grid>
    </div>
  );
}
