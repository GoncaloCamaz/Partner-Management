import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles({
  root: {
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
        background: "#060b26"
      }
  },
  warning: {
    width: '100%',
    backgroundColor: 'red',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    color: '#fff'
  },
  icon: {
      fontSize: 100,
  }
});

export default function EcardDownloadCard(props) {
  const classes = useStyles();
  const cardTitle = "Associate Card"//props.title

  const handleDownloadCard = () => {
      console.log("button pressed")
  }

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography >
              <CreditCardIcon className={classes.icon} fontSize="inherit"/>
          </Typography>
          <Typography variant="h5" component="h2">
              {cardTitle}
          </Typography>
          <br/>
          <Typography variant="h5" component="h2" onClick={handleDownloadCard}>
              Click to Download
          </Typography>
        </CardContent>
      </Card>
    );
}
