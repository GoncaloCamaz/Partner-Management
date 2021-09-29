import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AdminProfileForm from '../forms/AdminProfileForm';

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

export default function AdminProfileGrid(props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
          <Grid container spacing={3} className={classes.gridcontainer}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <AdminProfileForm 

                />
              </Grid>
          </Grid>
      </div>
    );
}
