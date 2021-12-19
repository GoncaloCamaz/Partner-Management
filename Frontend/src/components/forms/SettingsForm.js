import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridcontainer: {
    textAlign: 'center',
    alignContent: 'center'
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  input: {
    color: "#fff",
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#060b26',
     '&:hover': {
            background: "#1888ff"
    }
  }
}));

const initialFValues = {
  name: '',
  email: '',
  address: '',
  password: ''
}

export default function ProfileForm(props) {
  const classes = useStyles();
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
  }

  const handleSubmit = () => {
    console.log("Submit")
  }

  return (
      <div className={classes.root}>
        <form className={classes.form}>
          <Grid container spacing={3} className={classes.gridcontainer}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="associatesAccountEmail"
                  label="Associates Account Email"
                  name="associatesAccountEmail"
                  onChange={(event) => {handleInputChange(event)}}
              />
              <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  onChange={(event) => {handleInputChange(event)}}
              />
            <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="qrCodeURL"
                  label="Associate Card QR Code URL"
                  name="qrCodeURL"
                  onChange={(event) => {handleInputChange(event)}}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </Grid>
        </Grid>
        </form>
      </div>
    );
}