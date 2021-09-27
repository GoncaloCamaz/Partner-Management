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
      advantages: ["Oferta da sopa","Sobremesa"],
      addresses: ["Rua dos bares nº 5"],
      contacts: {telephone: "123123123", email: "email@arc.pt"}
    },
    {
      name: "VideoNorte",
      category: "Papelaria",
      advantages: ["Desconto de 50% em fotocópias a preto e branco"],
      addresses: ["Rua dos bares nº 20"],
      contacts: {telephone: "123123123", email: "email@arc.pt"}
    },
    {
        name: "Oculista",
        category: "Saúde",
        advantages: ["Exames oculares gratuitos"],
        addresses: ["Rua dos bares nº 25"],
        contacts: {telephone: "123123123", email: "email@arc.pt"}
    }
]
  const [ selectedPartnershipAdvantages, setSelectedPartnershipAdvantages] = useState(listPartnerships[0].advantages)
  const [ selectedPartnershipAddresses, setSelectedPartnershipAddresses] = useState(listPartnerships[0].addresses)
  const [ selectedPartnershipContacts, setSelectedPartnershipContacts] = useState(listPartnerships[0].contacts)


    const updateSelected = (index) => {
      const advantages = listPartnerships[index].advantages
      const addresses = listPartnerships[index].addresses
      const contacts = listPartnerships[index].contacts
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
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <PartnershipAdvantages advantages={selectedPartnershipAdvantages}/>
                <br/>
                <PartnershipAddress addresses={selectedPartnershipAddresses}/>
                <br/>
                <PartnershipContacts contacts={selectedPartnershipContacts}/>
            </Grid>
        </Grid>
    </div>
  );
}
