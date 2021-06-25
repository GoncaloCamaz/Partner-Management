import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

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
    '&:hover': {
      cursor: 'pointer',
      background: "#060b26"
    }
  },
  button: {
    color: '#fff'
  },
  icon: {
      fontSize: 100,
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const cardTitle = "Fee"//props.title
  const message = "2021"
  const year = new Date().getFullYear()
  const paidYear = Number(message)

  const handleSeeFees = () => {
    console.log("Handle see fees")
  }

  if(paidYear < year)
  {
    return (
      <Card className={classes.warning} variant="outlined" onClick={handleSeeFees} >
        <CardContent>
          <Typography >
              <EuroSymbolIcon className={classes.icon} fontSize="inherit"/>
          </Typography>
          <Typography variant="h5" component="h2">
              {cardTitle}
          </Typography>
          <br/>
          <Typography variant="h3" component="h2">
              Paid Until
          </Typography>
          <br />
          <Typography variant="h2" component="p">
            {paidYear}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="h5" component="h2">
                  Click to See Details
          </Typography>        
        </CardActions>
      </Card>
    );
  }
  else
  {
    return (
      <Card className={classes.root} variant="outlined" onClick={handleSeeFees} >
        <CardContent>
          <Typography >
              <EuroSymbolIcon className={classes.icon} fontSize="inherit"/>
          </Typography>
          <Typography variant="h5" component="h2">
              {cardTitle}
          </Typography>
          <br/>
          <Typography variant="h3" component="h2">
              Paid Until
          </Typography>
          <br />
          <Typography variant="h2" component="p">
            {paidYear}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="h5" component="h2">
                  Click to See Details
          </Typography>        
        </CardActions>
      </Card>
    );
  }
}
