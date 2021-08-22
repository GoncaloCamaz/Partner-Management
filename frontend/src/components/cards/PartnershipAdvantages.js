import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff',
  },
  list: {
    listStyle: 'none',
    textAlign: "left"
  }
});

export default function PartnershipAdvantages(props) {
  const classes = useStyles();
  const advantages = props.advantages

  return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Advantages
          </Typography>
          <ul className={classes.list}>
            {
              advantages.map((item,index) => 
              <li key={index}>
                <Typography key={index}>
                    {item}
                </Typography>
                </li>
              )
            }
          </ul>
        </CardContent>
      </Card>
    );
}
