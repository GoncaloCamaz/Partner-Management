import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Map from '../map/Map'
import { Typography } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';

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
    gap: '20px'
  },
});

export default function PartnershipAddress(props) {
  const classes = useStyles();
  const addresses = props.addresses

  const showMap = (name) => {
    console.log(name)
  }

    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Addresses
          </Typography>
          <ul className={classes.list}>
            {
              addresses.map((item,index) => 
              <li key={index}>
                <div className={classes.address}>
                  <Typography key={index}>
                      {item} 
                  </Typography>
                    <MapIcon label="test"/>
                </div>
              </li>
              )
            }
          </ul>
        </CardContent>
      </Card>
    );
}
