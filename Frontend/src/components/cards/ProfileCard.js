import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import GroupImageStep from '../steps/GroupImageStep'
import { AppContext } from '../../context/AppContext'

const useStyles = makeStyles({
  root: {
    height: '100%',
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  },
  content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  },
 icon: {
      fontSize: 100
  },
  groups: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%'
  },
  button: {
    color: "#fff"
  },
  media: {
    width: '20%',
  },
  text: {
    '&:hover': {
      cursor: 'pointer',
    }
  },
  stepper: {
    borderRadius: '10px'
  }
});

export default function ProfileCard(props) {
  const classes = useStyles();
  const appContext = useContext(AppContext)
  const associate = props.associate
  const groups =  appContext.state.groups || []
  var groupsToDisplay = []
  groups.forEach((item) => {
    if(associate.groups.includes(item.initials))
      groupsToDisplay.push(item)
  })

  const handleSeeProfile = () => {
    props.handleSeeProfile()
  }

  return (
    <Card className={classes.root} variant="outlined" >
      <CardContent className={classes.content}>
        <Typography >
            <PersonIcon className={classes.icon} fontSize="inherit"/>
        </Typography>
        <Typography variant="h4" component="h2">
            {associate.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {associate.email}
        </Typography>
        <br/>
        <Typography variant="h5" component="h2">
          Número de Associado: {associate.associateNumber}
        </Typography>
        <GroupImageStep groups={groupsToDisplay}/>
      </CardContent>
      <CardActions>
        <Typography className={classes.text} variant="h5" component="h2" onClick={handleSeeProfile}>
                Ver Detalhes
        </Typography>      
      </CardActions>
    </Card>
  );
}
