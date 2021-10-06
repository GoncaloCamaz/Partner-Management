import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { BsCardList } from 'react-icons/bs';

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

export default function PaymentSeeAllCard(props) {
  const classes = useStyles();
  const cardTitle = "Lista de Pagamentos"

  const handleSeeAllPayment = () => {
    props.handleSeeAllPayment()
  }

    return (
      <Card className={classes.root} variant="outlined" >
        <CardContent>
          <Typography >
              <BsCardList className={classes.icon} fontSize="inherit"/>
          </Typography>
          <Typography variant="h5" component="h2">
              {cardTitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography className={classes.text} variant="h5" component="h2" onClick={handleSeeAllPayment}>
                  Clica para Ver Detalhes
          </Typography>        
        </CardActions>
      </Card>
    );
}
