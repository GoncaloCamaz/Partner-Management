import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles({
  root: {
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff',
  },
  list: {
    listStyle: 'none',
    textAlign: "left"
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px'
  },
});

export default function PartnershipContacts(props) {
  const classes = useStyles();
  const contacts = props.contacts
  const telephone = contacts.phoneNumber
  const email = contacts.email

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Contactos
        </Typography>
        <ul className={classes.list}>
          <li>
            <div className={classes.contact}>
              <PhoneIcon/>
              <Typography >{telephone}</Typography>
            </div>
          </li>
          <br/>
          <li>
            <div className={classes.contact}>
              <EmailIcon/>
              <Typography >{email}</Typography>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}