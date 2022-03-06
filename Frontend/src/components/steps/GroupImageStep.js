import React from 'react';
import {makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import tum from '../../static/tum.png';
import tunaominho from '../../static/tunaominho.png';
import gpum from '../../static/gpum.png';
import gfum from '../../static/gfum.png';
import gmp from '../../static/gmp.png';
import bomboemia from '../../static/bomboemia.png';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 370,
    flexGrow: 1,
    backgroundColor: '#1a83ff',
  },
  color: {
    backgroundColor: '#1a83ff',
    color: '#fff',
  },
  button: {
    color:"#fff"
  },
  header: {
    height: 50,
    backgroundColor: '#1a83ff',
    color: '#fff',
  },
  img: {
    height: 180,
    maxWidth: 200,
    overflow: 'hidden',
    width: '100%',
  },
  textHeader: {
    paddingTop: 10,
  },
}));

function getImageObject(imageName) {
  switch(imageName) {
    case 'tum.png' :
      return tum;
    case 'tunaominho.png':
      return tunaominho
    case 'gpum.png':
      return gpum;
    case 'gmp.png':
      return gmp;
    case 'gfum.png':
      return gfum;
    case 'bomboemia.png':
      return bomboemia;
    default:
      return tum;
  }

}

function GroupImageStep(props) {
  const classes = useStyles();
  const theme = useTheme();
  const groups = props.groups
  const maxSteps = groups.length
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography className={classes.textHeader}>{activeStep.name}</Typography>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {groups.map((item, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={getImageObject(item.imageName)} alt={item.name} />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      {groups.length > 1? 
        <MobileStepper
          className={classes.color}
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button className={classes.button} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Próximo
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button className={classes.button} size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Anterior
            </Button>
          }
        />
        :
          <br/>
      }
    </div>
  );
}

export default GroupImageStep;
