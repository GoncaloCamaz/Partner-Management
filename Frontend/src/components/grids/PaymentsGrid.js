import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PaymentPageMenu from '../menus/PaymentPageMenu'
import UserPaymentsTable from '../tables/UserPaymentsTable';
import PaymentMethodAccordion from '../accordions/PaymentMethodsAccordion'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%'
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

//not used anymore

export default function PaymentsGrid(props) {
  const classes = useStyles();
  const [displayed, setDisplayed] = useState(0)
  const paymentMethods = props.paymentMethods
  const associatePayments = props.associatePayments

  const updateSelected = (selected) => {
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
                  <PaymentMethodAccordion paymentMethods={paymentMethods}/>
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
                  <UserPaymentsTable rows={associatePayments}/>
              </Grid>
          </Grid>
      </div>
    );
  }
}
