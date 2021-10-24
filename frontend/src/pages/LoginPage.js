import React, {useState, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../context/AuthContext';
import ARCUM from '../static/arcum.png'
import { Redirect } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://arcum.pt">
        ARCUM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100vh',
  },
  imageLogin: {
    backgroundImage: `url(${ARCUM})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  paperLogin: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarLogin: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  formLogin: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submitLogin: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const { handleLogin, authenticated, isAdmin, loading, authenticationObject } = useContext(Context);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirectToHomePage, setRedirectToHomePage] = useState(false)


  const handleClick = () => {
    handleLogin(username,password)
    console.log("on click",authenticationObject)

    if(authenticated === true)
    {
      setRedirectToHomePage(true)
    }
  }

  if(redirectToHomePage)
  {
    return <Redirect to={{
      pathname: "home",
      }}
  />
  }
  else
  {
  return (
    <Grid container component="main" className={classes.main}>
      <Grid item xs={false} sm={4} md={7} className={classes.imageLogin} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paperLogin}>
          <Avatar className={classes.avatarLogin}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Plataforma dos Associados 
          </Typography>
          <form className={classes.formLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => {setUsername(event.target.value)}}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => {setPassword(event.target.value)}}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Iniciar Sessão
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceste-te da Password?
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
  }
}