import { useState } from 'react';
import axios from 'axios'

export default function useGroups() {
  const [groups, setGroups] = useState([]);

  function handleGetGroups() {
      const groups = [
        {
            name: "Bomboémia",
            initials: "Bomboémia",
            imageURL: "http://arcum.pt/images/bomboemia/logo_full.png"
        },
        {
            name: "Grupo Folclórico da Universidade do Minho",
            initials: "GFUM",
            imageURL: "http://arcum.pt/images/gfum/logo.png"
        },
        {
            name: "Grupo de Música Popular da Universidade do Minho",
            initials: "GMP",
            imageURL: "http://arcum.pt/images/gmp/logo.png"
        },
        {
            name: "Grupo de Poesia da Universidade do Minho",
            initials: "GPUM",
            imageURL: "http://arcum.pt/images/gpum/logo_alt.png"
        },
        {
            name: "Tuna Universitária do Minho",
            initials: "TUM",
            imageURL: "http://arcum.pt/images/tum/logo.png"
        },
        {
            name: "Tun'ao Minho",
            initials: "Tun'ao Minho",
            imageURL: "http://arcum.pt/images/tunao/logo.png"
        }
    ]

    setGroups(groups)
  }
  
  return { groups, handleGetGroups };
}