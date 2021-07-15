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
  button: {
    color: '#fff'
  },
  icon: {
      fontSize: 100,
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const cardTitle = "Partnerships"//props.title

  const handleSeePartnerships = () => {
    console.log("Handle see partnerships")
  }

    return (
      <Card className={classes.root} variant="outlined" onClick={handleSeePartnerships} >
        <CardContent>
          <Typography >
              <FaHandshake className={classes.icon} fontSize="inherit"/>
          </Typography>
          <Typography variant="h5" component="h2">
              {cardTitle}
          </Typography>
          <br />
            <PartnershipsStep/>
        </CardContent>
        <CardActions>
          <Typography variant="h5" component="h2">
                  Click to See Details
          </Typography>        
        </CardActions>
      </Card>
    );
}