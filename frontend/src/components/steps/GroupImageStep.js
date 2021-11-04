import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 370,
    flexGrow: 1,
    backgroundColor: '#1a83ff',
  },
  color: {
    backgroundColor: '#1a83ff',
    color: '#fff'
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
    height: 155,
    maxWidth: 200,
    overflow: 'hidden',
    width: '100%',
  },
  textHeader: {
    paddingTop: 10,
  }
}));

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
          <div key={item.name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={item.imageURL} alt={item.name} />
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
