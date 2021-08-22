import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Timeline from '../timelines/Timeline'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();
  const paymentMethods = props.paymentMethods
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
        {
            paymentMethods.map((item, index) => (
                <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id={index}
                    >
                    <Typography className={classes.heading}>{item.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Timeline steps={item.steps} />
                    </AccordionDetails>
                </Accordion>
            ))
        }
    </div>
  );
}
