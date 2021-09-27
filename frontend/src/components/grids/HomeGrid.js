import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FeeCard from '../cards/FeeCard'
import ProfileCard from '../cards/ProfileCard'
import EcardDownloadCard from '../cards/EcardDownloadCard'
import ParthershipsCard from '../cards/PartnershipsCard'
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  gridcontainer: {
    textAlign: 'center'
  },
  paper: {
    backgroundColor: '#060b26',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [cardClicked, setCardClicked] = useState(false)
  const [cardClicked_name, setCardClicked_name] = useState("")

  const handleSeeFees = () => {
    setCardClicked_name("payments")
    setCardClicked(true)
  }

  const handleSeeProfile = () => {
    setCardClicked_name("profile")
    setCardClicked(true)
  }

  const handleSeePartnerships = () => {
    setCardClicked_name("partnerships")
    setCardClicked(true)
  }

  if(cardClicked)
  {
    return <Redirect to={{pathname: cardClicked_name}}/>
  }
  else
  {
    return (
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.gridcontainer}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Paper className={classes.paper}>
              <EcardDownloadCard />
            </Paper>
            <br/>
            <Paper className={classes.paper}>
              <ProfileCard handleSeeProfile={handleSeeProfile}/>
            </Paper>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Paper className={classes.paper}>
              <FeeCard handleSeeFees={handleSeeFees}/>
            </Paper>
            <br/>
            <Paper className={classes.paper}>
              <ParthershipsCard handleSeePartnerships={handleSeePartnerships}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
