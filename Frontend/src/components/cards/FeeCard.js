import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

const useStyles = makeStyles({
  root: {
      height: '100%',
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  warning: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    color: '#fff'
  },
  icon: {
      fontSize: 100,
  },
  text: {
    bottom: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    '&:hover': {
      cursor: 'pointer',
    }
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const cardTitle = "Quota"//props.title
  const message = props.associate.paindUntilYear || 2022
  const year = new Date().getFullYear()
  const paidYear = Number(message)

  const handleSeeFees = () => {
    props.handleSeeFees()
  }

  if(paidYear < year)
  {
    return (
      <Card className={classes.warning} variant="outlined">
        <CardContent>
          <Typography >
              <EuroSymbolIcon className={classes.icon} fontSize="inherit"/>
          </Typography>
          <Typography variant="h4" component="h2">
              {cardTitle}
          </Typography>
          <br/>
          <Typography variant="h3" component="h2">
              Pago até
          </Typography>
          <br />
          <Typography variant="h2" component="p">
            {paidYear}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography className={classes.text} variant="h5" component="h2" onClick={handleSeeFees}>
                  Ver Detalhes
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
          <Typography className={classes.text} variant="h5" component="h2">
                  Ver Detalhes
          </Typography>        
        </CardActions>
      </Card>
    );
  }
}
