import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AssociatesTable from '../tables/AssociatesTable'
import AssociatesTableOptionsForm from '../forms/AssociatesTableOptionsForm';

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

export default function AssociatesGrid(props) {
    const classes = useStyles();
    const tableRecords = props.records
    const [filteredTableRecords, setFilteredTableRecords] = useState(tableRecords)

    const handleReset = () => {
      setFilteredTableRecords(tableRecords)
    }

    const handleSearch = (values) => {
      var records = tableRecords

      if(values.fee !== '')
        records.filter(item => item.paidUntilYear === values.fee)
      
      if(values.group !== 'All')
        records.filter(item => item.groups.contains(values.group))

        setFilteredTableRecords(records)
    }

    return (
      <div className={classes.root}>
          <Grid container spacing={3} className={classes.gridcontainer}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <AssociatesTableOptionsForm handleReset={handleReset} handleSearch={handleSearch}/>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                 <AssociatesTable records={filteredTableRecords} />
              </Grid>
          </Grid>
      </div>
    );
}
