import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FeeCard from '../cards/FeeCard'
import ProfileCard from '../cards/ProfileCard'
import EcardDownloadCard from '../cards/EcardDownloadCard'
import ParthershipsCard from '../cards/PartnershipsCard'

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
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.gridcontainer}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Paper className={classes.paper}>
              <ProfileCard />
          </Paper>
          <br/>
          <Paper className={classes.paper}>
              <EcardDownloadCard />
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Paper className={classes.paper}>
              <FeeCard />
          </Paper>
          <br/>
          <Paper className={classes.paper}>
              <ParthershipsCard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
