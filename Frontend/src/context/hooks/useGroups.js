import { useState, useEffect } from 'react';
import axios from 'axios'
import {groupsServerURL} from '../../constants'


export default function useGroups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(groups.length > 0)
        setLoading(false)
  }, [loading])

  function handleGetGroups() {
    const URL = groupsServerURL
    setLoading(true)
    axios.get(URL).then((response) => {
        if(response.status === 200)
        {
          setGroups(response.data)
          setLoading(false)
        }
    }).catch(error => {
        console.log(error)
    });
  }
  
  return { groups, loading, handleGetGroups };
}