import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import generateCard from '../pdf/AssociateCardGenerator';
import arcum from '../../static/arcum.png';

const useStyles = makeStyles({
  root: {
	  maxHeight: '400px',
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

export default function EcardDownloadCard(props) {
  const classes = useStyles();
  const cardTitle = "Cartão de Associado"
  const associate = props.associate

  const handleDownloadCard = () => {
    const name = "Cartao - " + associate.name + ".pdf"
    const content = {
      associate: associate,
      arcumImage: arcum
    }

    var doc = generateCard(content)
    doc.save(name)
  }

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography >
              <CreditCardIcon className={classes.icon} fontSize="inherit"/>
          </Typography>
          <Typography variant="h5" component="h2">
              {cardTitle}
          </Typography>
          <br/>
          <Typography className={classes.text} variant="h5" component="h2" onClick={handleDownloadCard}>
              Download
          </Typography>
        </CardContent>
      </Card>
    );
}
