import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { FaFileCsv } from 'react-icons/fa';

const useStyles = makeStyles({
  root: {
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  warning: {
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
    '&:hover': {
      cursor: 'pointer',
    }
  }
});

export default function PaymentReportsCard(props) {
  const classes = useStyles();
  const cardTitle = "Relatórios"

  const handleSeePaymentReports = () => {
    props.handleSeePaymentReports()
  }

    return (
      <Card className={classes.root} variant="outlined" >
        <CardContent>
          <Typography >
              <FaFileCsv className={classes.icon} fontSize="inherit"/>
          </Typography>
          <Typography variant="h5" component="h2">
              {cardTitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography className={classes.text} variant="h5" component="h2" onClick={handleSeePaymentReports}>
                  Ver Detalhes
          </Typography>        
        </CardActions>
      </Card>
    );
}
