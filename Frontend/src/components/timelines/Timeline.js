import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 15
  }
}));

export default function BasicTimeline(props) {
  const steps = props.steps
  const classes = useStyles();

  return(
     <Timeline align="left">
        {steps.map((item, index) => (
            <TimelineItem key={index}>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent  className={classes.root}>
                    {item.stepDescription}
                </TimelineContent>
            </TimelineItem>
        ))}
    </Timeline>
  );
}
