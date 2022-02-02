import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const useStyles = makeStyles({
  root: {
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff',
  },
  advantage: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px'
  },
  list: {
    listStyle: 'none',
    textAlign: "left"
  }
});

export default function PartnershipAdvantages(props) {
  const classes = useStyles();
  const advantages = props.partnership.advantages

  return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Vantagens
          </Typography>
          <ul className={classes.list}>
            {
              advantages.map((item,index) => 
              <li key={index}>
                <div className={classes.advantage}>
                  <LabelImportantIcon />
                  <Typography key={index}>
                      {item}
                  </Typography>
                </div>
                </li>
              )
            }
          </ul>
        </CardContent>
      </Card>
    );
}
