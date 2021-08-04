import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    borderRadius: 10
  },
  tabs: {
      backgroundColor: '#1a83ff',
      color: "#fff",
      indicatorColor: '#fff',
      borderRadius: 5
  },
  tab: {
    backgroundColor: "#fff"
  },
  indicator: {
    backgroundColor: "#060b26",
    paddingLeft: 10,
    position: "absolute",
    left: 0,
    marginLeft: -1
  }
});

export default function PartnershipsList(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const list = props.partnerships

  const handleChange = (_event, newValue) => {
    setValue(newValue);
    props.updateSelected(newValue)
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        orientation="vertical"
        indicatorColor="primary"
        classes={{indicator: classes.indicator}}
        centered
      >
        {list.map((item, index) => (
            <Tab key={index} classeName={classes.tab} label={item.name} />
        ))}
      </Tabs>
    </Paper>
  );
}
