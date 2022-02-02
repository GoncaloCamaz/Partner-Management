import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FaHandshake } from 'react-icons/fa';
import PartnershipsStep from '../steps/PartnershipsStep';

const useStyles = makeStyles({
  root: {
      height: '100%',
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
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

export default function PartnershipsCard(props) {
  const classes = useStyles();
  const cardTitle = "Parcerias"//props.title
  const partnerships = props.partnerships

  const handleSeePartnerships = () => {
    props.handleSeePartnerships()
  }

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <br/>
          <Typography >
              <FaHandshake className={classes.icon} fontSize="inherit"/>
          </Typography>
          <Typography variant="h5" component="h2">
              {cardTitle}
          </Typography>
          <br />
            <PartnershipsStep partnerships={partnerships}/>
        </CardContent>
        <CardActions>
          <Typography className={classes.text} variant="h5" component="h2" onClick={handleSeePartnerships}>
                Ver Detalhes
          </Typography>        
        </CardActions>
      </Card>
    );
}
