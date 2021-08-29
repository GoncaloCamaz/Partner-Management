import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import SearchIcon from '@material-ui/icons/Search';
import Select from '../controls/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridcontainer: {
    textAlign: 'center',
    alignContent: 'center'
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  formInput: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    left: 0,
  },
  input: {
    color: "#fff",
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginLeft: 10,
    backgroundColor: '#060b26',
     '&:hover': {
            background: "#1888ff"
    }
  }
}));

const initialFValues = {
  group: 'All',
  fee: '',
}

export default function AssociatesTableOptionsForm(props) {
  const classes = useStyles();
  const [values, setValues] = useState(initialFValues);
  const options = [{id: "All", title: "All"}, {id: "TUM", title: "TUM"},{id: "Tunaominho", title: "Tunaominho"},]
  
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
  }

  const handleReset = () => {
    props.handleReset()
  }

  const handleSubmit = () => {
    props.handleSearch(values)
  }

    return (
      <div className={classes.root}>
        <form className={classes.form}>
          <Grid container spacing={3} className={classes.gridcontainer}>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.formInput}>
                <Select 
                    name="group"
                    label="Group"
                    multiple={false}
                    value={values.group}
                    onChange={(event) => {handleInputChange(event)}}
                    options={options}
                    className={classes.input}
                />
                <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fee"
                  label="Fee Year"
                  name="fee"
                  onChange={(event) => {handleInputChange(event)}}
                />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      className={classes.button}
                      startIcon={<SearchIcon />}
                      onClick={handleSubmit}
                  >
                      Search
                  </Button>
                  <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      className={classes.button}
                      startIcon={<UndoIcon />}
                      onClick={handleReset}
                  >
                      Reset
                  </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
}