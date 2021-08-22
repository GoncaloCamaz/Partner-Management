import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
  const [groups, setGroups] = useState({
    tum: true,
    gmp: true,
    tunaominho: true,
    bomboemia: true,
    gpum: true,
    gfum: true
  })
  const selectedMenu = props.currentMenu
  
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
  }

  const handleGroupChange = (event) => {
    setGroups({ ...groups, [event.target.name]: event.target.checked });
  };

  const handleSubmit = () => {
    console.log("Submit")
  }

  if(selectedMenu === 0)
  {
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
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  onChange={(event) => {handleInputChange(event)}}
              />
                <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="nickname"
                  label="Nickname"
                  name="nickname"
                  onChange={(event) => {handleInputChange(event)}}
              />
              <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {handleInputChange(event)}}
              />
              <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="phone_number"
                  label="Phone Number"
                  name="phone_number"
                  autoComplete="phone"
                  onChange={(event) => {handleInputChange(event)}}
              />
              <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  onChange={(event) => {handleInputChange(event)}}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="address-level2"
                  onChange={(event) => {handleInputChange(event)}}
              />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextField
                    className={classes.input}
                    variant="outlined"
                    margin="normal"
                    id="postalcode"
                    label="Postal Code"
                    name="postalcode"
                    autoComplete="postal-code"
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
  else if(selectedMenu === 1)
  {
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
                  id="old_password"
                  label="Old Password"
                  name="old_password"
                  onChange={(event) => {handleInputChange(event)}}
              />
              <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  id="new_password"
                  label="New Password"
                  name="new_password"
                  onChange={(event) => {handleInputChange(event)}}
              />
              <TextField
                  className={classes.input}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  id="new_password_confirm"
                  label="New Password Confirmation"
                  name="new_password_confirm"
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
  else
  {
    const { tum, gmp, tunaominho, bomboemia, gpum, gfum } = groups;

    return (
      <div className={classes.root}>
         <form className={classes.form}>
          <Grid container spacing={3} className={classes.gridcontainer}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={tum} onChange={handleGroupChange} name="tum" />}
                  label="Tuna Universitária do Minho (TUM)"
                />
                <FormControlLabel
                  control={<Checkbox checked={gmp} onChange={handleGroupChange} name="gmp" />}
                  label="Grupo de Música Popular (GMP)"
                />
                <FormControlLabel
                  control={<Checkbox checked={tunaominho} onChange={handleGroupChange} name="tunaominho" />}
                  label="TunaoMinho"
                />
                <FormControlLabel
                  control={<Checkbox checked={bomboemia} onChange={handleGroupChange} name="bomboemia" />}
                  label="Bomboémia"
                />
                <FormControlLabel
                  control={<Checkbox checked={gpum} onChange={handleGroupChange} name="gpum" />}
                  label="Grupo de Poesia da Universidade do Minho (GPUM)"
                />
                <FormControlLabel
                  control={<Checkbox checked={gfum} onChange={handleGroupChange} name="gfum" />}
                  label="Grupo Folclórico da Universidade do Minho (GFUM)"
                />
              </FormGroup>
            </FormControl>
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
}
