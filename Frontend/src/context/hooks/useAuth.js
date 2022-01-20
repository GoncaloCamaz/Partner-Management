import { useState, useEffect } from 'react';
import history from '../../history';
import axios from 'axios'
import {backendURL} from '../../constants'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, [loading]);
  
  function handleLogin(username, password) {
    setLoading(true)
    const URL = backendURL + "login"
    axios.post(URL, {
      email: username,
      password: password
    })
    .then((response) => {
      if(response.status === 200)
      {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", username)
        if(response.data.userRole === 'ADMIN')
        {
          localStorage.setItem("isAdmin", "1")
        }
        setAuthenticated(true)
        setLoading(false)
        history.push('/home');
      }
    }).catch(error => {
      window.alert("Bad credentials inserted!")
    });
  }

  function handleLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem('user')
    localStorage.removeItem('isAdmin')
    history.push('/');
  }
  
  return { authenticated, handleLogin, handleLogout };
}