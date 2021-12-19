import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

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
  indicator: {
    backgroundColor: "#060b26",
    paddingLeft: 10,
    position: "absolute",
    left: 0,
    marginLeft: -1
  }
});

export default function IconLabelTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
        <Tab icon={<PersonIcon />} label="Informações do Associado" />
        <Tab icon={<VpnKeyIcon />} label="Credênciais" />
        <Tab icon={<GroupIcon />} label="Grupos" />
      </Tabs>
    </Paper>
  );
}
