import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar'
import { GroupContext } from '../context/GroupContext';
import Paper from '@material-ui/core/Paper';
import Grid from '@mui/material/Grid';
import FeeCard from '../components/cards/FeeCard'
import ProfileCard from '../components/cards/ProfileCard'
import EcardDownloadCard from '../components/cards/EcardDownloadCard'
import ParthershipsCard from '../components/cards/PartnershipsCard'
import { Redirect } from 'react-router-dom';
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

export default function HomePageUser() {
    const {groups,handleGetGroups} = useContext(GroupContext)
    useEffect(() => {
        if (groups.length === 0) {
            handleGetGroups()
        }
      }, [groups, handleGetGroups])

    const classes = useStyles();
    const [cardClicked, setCardClicked] = useState(false)
    const [cardClicked_name, setCardClicked_name] = useState("")
    const [propsToSend, setPropsToSend] = useState({})

    const associate = {associateNumber: 123, name: "Gonçalo  Dias Camaz Moreira", nickname: "Camadas", phoneNumber: "936954775",email: "gcamaz@sapo.pt", password: "myPassword123!!",active: true, address:"Rua do Socialismo 20",city: "Vila do Conde",postalCode: "4485-032",paidUntilYear: 2021,groups: ["TUM"]}


    const handleSeeFees = () => {
        setCardClicked_name("payments")
        setCardClicked(true)
      }
    
    const handleSeeProfile = () => {
        setCardClicked_name("profile")
        setPropsToSend(associate)
        setCardClicked(true)
    }
    
    const handleSeePartnerships = () => {
       setCardClicked_name("partnerships")
       setCardClicked(true)
    }

    
    if(cardClicked)
    {
        return <Redirect to={{pathname: cardClicked_name, content: propsToSend}}/>
    }
    else
    {
        return (
            <div className="home">
                <Navbar/>
                <div className="page-container">
                    <div className={classes.root}>
                        <Grid container columnSpacing={3} className={classes.gridcontainer}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Paper className={classes.paper}>
                                    <ProfileCard associate={associate} handleSeeProfile={handleSeeProfile}/>
                                </Paper>
                                <br/>
                                <Paper className={classes.paper}>
                                    <EcardDownloadCard associate={associate} arcumImage={"http://arcum.pt/images/logos/arcum.png"}/>
                                </Paper>
                                <br/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Paper className={classes.paper}>
                                    <FeeCard handleSeeFees={handleSeeFees}/>
                                </Paper>
                                <br/>
                                <Paper className={classes.paper}>
                                    <ParthershipsCard handleSeePartnerships={handleSeePartnerships}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>   
        );
    }
}