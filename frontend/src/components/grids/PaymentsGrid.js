import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PaymentPageMenu from '../menus/PaymentPageMenu'
import UserPaymentsTable from '../tables/UserPaymentsTable';

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

export default function UserProfileGrid() {
  const classes = useStyles();
  const [displayed, setDisplayed] = useState(0)

  const updateSelected = (selected) => {
      console.log(selected)
      setDisplayed(selected)
  }

  if(displayed === 0)
  {
    return (
      <div className={classes.root}>
          <Grid container spacing={3} className={classes.gridcontainer}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                  <PaymentPageMenu updateSelected={updateSelected} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
              </Grid>
          </Grid>
      </div>
    );
  }
  else
  {
    return (
      <div className={classes.root}>
          <Grid container spacing={3} className={classes.gridcontainer}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                  <PaymentPageMenu updateSelected={updateSelected} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                  <UserPaymentsTable />
              </Grid>
          </Grid>
      </div>
    );
  }
}
