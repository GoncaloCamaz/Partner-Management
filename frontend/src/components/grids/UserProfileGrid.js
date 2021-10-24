import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UserMenu from '../menus/UserInfoMenu'
import ProfileForm from '../forms/ProfileForm'
import AssociateNumberCard from '../cards/AssociateNumberCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridcontainer: {
    textAlign: 'center',
  },
  paper: {
    backgroundColor: '#060b26',
    color: theme.palette.text.secondary,
  },
  associate: {
      color: "#fff"
  }
}));

export default function UserProfileGrid(props) {
  const classes = useStyles();
  const [displayedForm, setDisplayedForm] = useState(0)

  const updateSelected = (selected) => {
      setDisplayedForm(selected)
  }

    return (
      <div className={classes.root}>
          <Grid container spacing={3} className={classes.gridcontainer}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                  <UserMenu updateSelected={updateSelected} />
                  <br />
                  <AssociateNumberCard />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                  <ProfileForm currentMenu={displayedForm} />
              </Grid>
          </Grid>
      </div>
    );
}
