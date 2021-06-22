import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

const useStyles = makeStyles({
  root: {
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff'
 },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: '#fff'
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
      fontSize: 60
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const cardTitle = "Fee"//props.title
  const message = "Paid until: 2021"
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" >
      <CardContent>
        <Typography >
            <EuroSymbolIcon className={classes.icon} fontSize="inherit"/>
        </Typography>
        <Typography variant="h5" component="h2">
            {cardTitle}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          {message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Como Regularizar</Button>
      </CardActions>
    </Card>
  );
}
