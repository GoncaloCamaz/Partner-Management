import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AssociatesTable from '../tables/AssociatesTable'
import AssociatesTableOptionsForm from '../forms/AssociatesTableOptionsForm';

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

export default function AssociatesGrid(props) {
    const classes = useStyles();
    const records = props.records

    const handleReset = () => {
      props.handleReset()
    }

    const handleSearch = (values) => {
      props.handleSearch(values)
    }

    return (
      <div className={classes.root}>
          <Grid container spacing={3} className={classes.gridcontainer}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <AssociatesTableOptionsForm handleReset={handleReset} handleSearch={handleSearch}/>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                 <AssociatesTable records={records} />
              </Grid>
          </Grid>
      </div>
    );
}
