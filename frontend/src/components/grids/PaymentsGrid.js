import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PaymentPageMenu from '../menus/PaymentPageMenu'
import UserPaymentsTable from '../tables/UserPaymentsTable';
import PaymentMethodAccordion from '../accordions/PaymentMethodsAccordion'

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
  const paymentMethods =  
  [
    {
    name: "Transferência Bancária", 
    steps: [
        {
            step_id: 0,
            step_name: "Efetuar Transferência",
            step_content: "Efetuar transferência bancária para o seguinte NIB: 12318212192381939131931231"
        },
        {
            step_id: 1,
            step_name: "Enviar comprovativo",
            step_content: "Enviar comprovativo da transferência para: associados@arcum.pt"
        },
        {
            step_id: 2,
            step_name: "Finzalização",
            step_content: "A transferência irá ser registada pelo gestor de associados.O recibo poderá ser emitido assim que a transferência estiver confirmada."
        }
    ]
  },
  {
    name: "Presencialmente", 
    steps: [
        {
            step_id: 0,
            step_name: "Entrar em contacto com o Gestor de Associados",
            step_content: "Contactar o gestor de associados através do email associados@arcum.pt"
        },
        {
            step_id: 1,
            step_name: "Combinar uma data",
            step_content: "Combinar com o gestor de associados a melhor data para regularizar as quotas."
        },
        {
            step_id: 2,
            step_name: "Finzalização",
            step_content: "A transferência irá ser registada pelo gestor de associados. O recibo poderá ser emitido assim que a transferência estiver confirmada."
        }
    ]
  }
] 

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
                  <UserPaymentsTable />
              </Grid>
          </Grid>
      </div>
    );
  }
}
