import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PaymentMethodCard from '../cards/PaymentMethodCard';
import PaymentReportsCard from '../cards/PaymentReportsCard';
import PaymentSeeAllCard from '../cards/PaymentSeeAllCard';

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

export default function PaymentsAdminPageGrid(props) {
  const classes = useStyles();

  const handleSeePaymentMethods = () => {
    props.handleSeePaymentMethods()
  }

  const handleSeeAllPayment = () => {
    props.handleSeeAllPayments()
  }

  const handleSeePaymentReports = () => {
    props.handleSeePaymentReports()
  }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.gridcontainer}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <PaymentMethodCard handleSeePaymentMethods={handleSeePaymentMethods}/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <PaymentReportsCard handleSeePaymentReports={handleSeePaymentReports}/>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <PaymentSeeAllCard handleSeeAllPayment={handleSeeAllPayment}/>
                </Grid>
            </Grid>
        </div>
    );
}
