import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import SwipeableTextMobileStepper from './GroupImageStep'

const useStyles = makeStyles({
  root: {
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
 icon: {
      fontSize: 100
  },
  groups: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%'
  },
  button: {
    color: "#fff"
  },
  media: {
    width: '20%',
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const name = "Gonçalo Dias Camaz Moreira"
  const email = "gcamaz@sapo.pt"
  const groups = "TUM"

  return (
    <Card className={classes.root} variant="outlined" >
      <CardContent className={classes.content}>
        <Typography >
            <PersonIcon className={classes.icon} fontSize="inherit"/>
        </Typography>
        <Typography variant="h3" component="h2">
            {name}
        </Typography>
        <br/>
        <Typography variant="h5" component="h2">
          {email}
        </Typography>
        <br/>
        <SwipeableTextMobileStepper/>
      </CardContent>
      <CardActions>
        <Button className={classes.button} size="small">See Details</Button>
      </CardActions>
    </Card>
  );
}
