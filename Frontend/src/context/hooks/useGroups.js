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
            console.log(response.data)
          setGroups(response.data)
          setLoading(false)
        }
    }).catch(error => {
        console.log(error)
    });
  }
  
  return { groups, handleGetGroups };
}

/**
 * 
 * 
 *       const groups = [
        {
            name: "Bomboémia",
            initials: "Bomboémia",
            imageName: '',
            imageURL: "http://arcum.pt/images/bomboemia/logo_full.png"
        },
        {
            name: "Grupo Folclórico da Universidade do Minho",
            initials: "GFUM",
            imageName: '',
            imageURL: "http://arcum.pt/images/gfum/logo.png"
        },
        {
            name: "Grupo de Música Popular da Universidade do Minho",
            initials: "GMP",
            imageName: '',
            imageURL: "http://arcum.pt/images/gmp/logo.png"
        },
        {
            name: "Grupo de Poesia da Universidade do Minho",
            initials: "GPUM",
            imageName: '',
            imageURL: "http://arcum.pt/images/gpum/logo_alt.png"
        },
        {
            name: "Tuna Universitária do Minho",
            initials: "TUM",
            imageName: '',
            imageURL: "http://arcum.pt/images/tum/logo.png"
        },
        {
            name: "Tun'ao Minho",
            initials: "Tun'ao Minho",
            imageName: '',
            imageURL: "http://arcum.pt/images/tunao/logo.png"
        }
    ]
 */