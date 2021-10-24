import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Map from '../map/Map'
import { Typography } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import Popup from '../popup/Popup'

const useStyles = makeStyles({
  root: {
      width: '100%',
      backgroundColor: '#1a83ff',
      color: '#fff',
  },
  list: {
    listStyle: 'none',
    textAlign: "left"
  },
  address: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px'
  },
  clickHereMap: {
    '&:hover': {
      cursor: 'pointer',
    }
  }
});

export default function PartnershipAddress(props) {
  const classes = useStyles();
  const addresses = props.addresses
  const [openPopup, setOpenPopup] = useState(false)
  const [itemToSeeOnMap, setItemToSeeOnMap] = useState({})

  const openMap = (item) => {
    const itemToSeeOnMap = {address: item.address, position: [item.latitude, item.longitude]}
    setItemToSeeOnMap(itemToSeeOnMap)
    handleOpenPopup()
  }

  const handleOpenPopup = () => {
      setOpenPopup(true)
  }

    return (
      <Card className={classes.root} variant="outlined">
        <Popup 
          title={itemToSeeOnMap.address}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}>
            <Map position={itemToSeeOnMap.position}/>
        </Popup>
        <CardContent>
          <Typography variant="h5" component="h2">
            Moradas
          </Typography>
          <ul className={classes.list}>
            {
              addresses.map((item,index) => 
              <li key={index}>
                <div className={classes.address}>
                    <MapIcon/>
                    <Typography key={index}>
                        {item.address} 
                    </Typography>
                    <Typography onClick={() => {openMap(item)}} className={classes.clickHereMap}>
                      (Clica para Ver no Mapa)
                    </Typography>
                  </div>
              </li>
              )
            }
          </ul>
        </CardContent>
      </Card>
    );
}
