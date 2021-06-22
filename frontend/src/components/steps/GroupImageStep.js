import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import TUM from '../../static/tum.png'
import TUNAOMINHO from '../../static/tunaominho.png'
import GMP from '../../static/gmp.png'
import GFUM from '../../static/gfum.png'
import GPUM from '../../static/gpum.png'
import BOMBOEMIA from '../../static/bomb.png'

const tutorialSteps = [
  {
    label: 'Tuna Universitária do Minho',
    imgPath: TUM
  },
  {
    label: 'TunaoMinho',
    imgPath: TUNAOMINHO,
  },
  {
    label: 'Bomboémia',
    imgPath: BOMBOEMIA,
  },
  {
    label: 'Grupo de Poesia da Universidade do Minho',
    imgPath: GPUM
  },
  {
    label: 'Grupo de Música Popular',
    imgPath: GMP  
},
{
    label: 'Grupo Folclórico da Universidade do Minho',
    imgPath: GFUM  
},
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 370,
    flexGrow: 1,
    backgroundColor: '#1a83ff'
  },
  color: {
    backgroundColor: '#060b26',
    color: '#fff'
  },
  button: {
    color:"#fff"
  },
  header: {
    height: 50,
    backgroundColor: '#060b26',
    color: '#fff'
  },
  img: {
    height: 200,
    maxWidth: 300,
    overflow: 'hidden',
    width: '100%',
  },
  textHeader: {
    paddingTop: 10,
  }
}));

function GroupImageStep() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

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
        <Typography className={classes.textHeader}>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        className={classes.color}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button className={classes.button} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button className={classes.button} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default GroupImageStep;
