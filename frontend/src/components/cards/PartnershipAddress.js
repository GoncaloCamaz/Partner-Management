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
  const [addressName, setAddressName] = useState('')

  const openMap = (name) => {
    setAddressName(name)
    setOpenPopup(true)
  }

    return (
      <Card className={classes.root} variant="outlined">
        <Popup 
          title={addressName}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}>
            <Map />
        </Popup>
        <CardContent>
          <Typography variant="h5" component="h2">
            Addresses
          </Typography>
          <ul className={classes.list}>
            {
              addresses.map((item,index) => 
              <li key={index}>
                <div className={classes.address}>
                    <MapIcon/>
                    <Typography key={index}>
                        {item} 
                    </Typography>
                    <Typography onClick={() => {openMap(item)}} className={classes.clickHereMap}>
                      (Click here to see on Map)
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
