import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PartnershipsList from '../menus/PartnershipsList'
import PartnershipAddress from '../cards/PartnershipAddress';
import PartnershipAdvantages from '../cards/PartnershipAdvantages';
import PartnershipContacts from '../cards/PartnershipContacts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridcontainer: {
    textAlign: 'center',
  },
  gridwithcardcontainer: {
    color: '#fff',
  },
  paper: {
    backgroundColor: '#060b26',
    color: theme.palette.text.secondary,
  },
  associate: {
      color: "#fff"
  }
}));

export default function PartnershipGrid(props) {
  const classes = useStyles();
  const listPartnerships = props.partnerships
  const [ selectedPartnershipAdvantages, setSelectedPartnershipAdvantages] = useState(listPartnerships[0].advantages)
  const [ selectedPartnershipAddresses, setSelectedPartnershipAddresses] = useState(listPartnerships[0].addresses)
  const [ selectedPartnershipContacts, setSelectedPartnershipContacts] = useState(listPartnerships[0])


    const updateSelected = (index) => {
      const advantages = listPartnerships[index].advantages
      const addresses = listPartnerships[index].addresses
      const contacts = listPartnerships[index]
      setSelectedPartnershipAdvantages(advantages)
      setSelectedPartnershipAddresses(addresses)
      setSelectedPartnershipContacts(contacts)
    }

  return (
    <div className={classes.root}>
        <Grid container spacing={3} className={classes.gridcontainer}>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <PartnershipsList partnerships={listPartnerships} updateSelected={updateSelected}/>
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
            <Grid container spacing={3} className={classes.gridwithcardcontainer}>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                  <PartnershipAdvantages advantages={selectedPartnershipAdvantages}/>
                  <br/>
                  <PartnershipAddress addresses={selectedPartnershipAddresses}/>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <PartnershipContacts contacts={selectedPartnershipContacts}/>
              </Grid>
            </Grid>
            </Grid>
        </Grid>
    </div>
  );
}
