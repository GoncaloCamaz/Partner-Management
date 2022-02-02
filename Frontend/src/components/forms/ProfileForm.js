import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AssociateForm from './AssociateForm';
import AssociatePasswordForm from './AssociatePasswordForm';
import AssociateGroupsForm from './AssociateGroupsForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridcontainer: {
    textAlign: 'center',
    alignContent: 'center'
  },
  form: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  input: {
    color: "#fff",
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#060b26',
     '&:hover': {
            background: "#1888ff"
    }
  }
}));

export default function ProfileForm(props) {
  const classes = useStyles();
  const selectedMenu = props.currentMenu
  const associate = props.associate
  const groups = props.groups

  const handleUpdateAssociateInformation = (associate) => {
    props.updateAssociate(associate)
  }

  const handleUpdateAssociateCredentials = (credentials) => {
    props.updateAssociateCredentials(credentials)
  } 
  
  if(selectedMenu === 0)
  {
    return (
      <div className={classes.root}>
        <div className={classes.form}>
          <Grid container spacing={3} className={classes.gridcontainer}>
            <Grid item >
              <AssociateForm recordForEdit={associate} addOrEdit={handleUpdateAssociateInformation}/>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
  else if(selectedMenu === 1)
  {
    return (
      <div className={classes.root}>
         <div className={classes.form}>
          <Grid container spacing={3} className={classes.gridcontainer}>
            <Grid item >
              <AssociatePasswordForm recordForEdit={associate} addOrEdit={handleUpdateAssociateCredentials}/>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
  else
  {
    return (
      <div className={classes.root}>
         <div className={classes.form}>
          <Grid container spacing={3} className={classes.gridcontainer}>
            <Grid item >
              <h4>Seleciona os grupos a que pertences:</h4>
              <AssociateGroupsForm recordForEdit={associate} addOrEdit={handleUpdateAssociateInformation} groups={groups}/>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
