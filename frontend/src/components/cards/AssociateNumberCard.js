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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  }
});

export default function AssociateNumberCard(props) {
  const classes = useStyles();
  const associateNumber = 124 // props.associateNumber

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography  variant="h6" component="h6">
              Número de Associado: {associateNumber}
          </Typography>
        </CardContent>
      </Card>
    );
}
