import { useState, useEffect } from 'react';
import history from '../../history';
import axios from 'axios'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setAdmin] = useState(false);
  const [token, setToken] = useState('')
  const [authenticationObject, setAuthenticationObject] = useState({isAdmin: false, loading: false, token: null, authenticated: false})

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);
  
  function handleLogin(paramusername, parampassword) {
    const URL = "http://backend:8080/login"
    const authenticationResult = {
      isAdmin: true,
      loading: false,
      token: "blablalablasidniufniaufn",
      username: paramusername,
      authenticated: true
    }
    setAuthenticationObject(authenticationResult)
    setToken("blablablbablablb")
    setLoading(false)
    setAuthenticated(true)
    history.push('/home');

    /**
    axios.post(URL, {
      email: paramusername.username,
      password: parampassword.password
    })
    .then((response) => {
      if(response.status === 200)
      {
        localStorage.setItem("token", response.data.token)
        setToken(response.data.token)
        if(response.data.user_role === 'ADMIN')
        {
            setAdmin(true)
        }
        setLoading(false)
        setAuthenticated(true);
        history.push('/home');
      }
    }).catch(error => {
      window.alert("Bad credentials inserted!")
      setLoading(false)
      setAuthenticated(false);
    });
     */
  }

  function handleLogout() {
    setAuthenticated(false);
    setToken('')
    setAdmin(false)
    localStorage.removeItem("token")
    history.push('/');
  }
  
  return { authenticated, loading, token, isAdmin, authenticationObject,handleLogin, handleLogout };
}