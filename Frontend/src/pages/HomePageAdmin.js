import React from 'react';
import Navbar from '../components/navbar/Navbar'
import './Pages.css'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxHeight: 'fit-content'
    },
    gridcontainer: {
      textAlign: 'center',
    },
    paper: {
      backgroundColor: '#060b26',
      color: theme.palette.text.secondary,
    },
  }));

export default function HomePageAdmin() {
    return (
      <div>
        
      </div>
      );
}