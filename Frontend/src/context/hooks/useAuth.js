import { useState, useEffect } from 'react';
import history from '../../history';
import axios from 'axios'
import {backendURL} from '../../constants'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false)
  const [authenticationObject, setAuthenticationObject] = useState({isAdmin: false, loading: false, token: null, authenticated: false})

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setAuthenticated(true);
    }
  }, [loading]);
  
  async function handleLogin(username, password) {
    setLoading(true)
    const URL = backendURL + "login"
    var authenticationResult = {
      isAdmin: false, 
      token: null, 
      authenticated: false
    }

    await axios.post(URL, {
      email: username,
      password: password
    })
    .then((response) => {
      if(response.status === 200)
      {
        localStorage.setItem("token", response.data.token)
        if(response.data.user_role === 'ADMIN')
        {
          authenticationResult.isAdmin = true
        }
        
        authenticationResult.token = response.data.token
        authenticationResult.authenticated = true
        setAuthenticationObject(authenticationResult)
        setAuthenticated(true)
        setLoading(false);
      }
    }).catch(error => {
      window.alert("Bad credentials inserted!")
      setAuthenticationObject(authenticationResult)
      setLoading(false);
    });
  }

  function handleLogout() {
    var authenticationResult = {
      isAdmin: false, 
      token: null, 
      authenticated: false
    }
    localStorage.removeItem("token")
    setAuthenticationObject(authenticationResult)
    history.push('/');
  }
  
  return { authenticated, authenticationObject, handleLogin, handleLogout };
}