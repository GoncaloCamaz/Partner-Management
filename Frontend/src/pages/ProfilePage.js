import React, { useContext, useState } from 'react';
import Navbar from '../components/navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UserMenu from '../components/menus/UserInfoMenu'
import ProfileForm from '../components/forms/ProfileForm'
import AssociateNumberCard from '../components/cards/AssociateNumberCard';
import './Pages.css'
import AdminProfileForm from '../components/forms/AdminProfileForm';
import {backendURL} from '../constants'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    gridcontainer: {
      textAlign: 'center',
    },
    paper: {
      backgroundColor: '#060b26',
      color: theme.palette.text.secondary,
    },
    associate: {
        color: "#fff"
    }
  }));


export default function ProfilePage(props) {
    const classes = useStyles();
    const [displayedForm, setDisplayedForm] = useState(0)
    
    const admin = false//GetAdminContentFromContext()
    const groups =[]// GetGroupsContentFromContext()

    const associate = null//LoadAssociateContent(props.location.content)
    const updateSelected = (selected) => {
        setDisplayedForm(selected)
    }
  
    if(admin)
    {
        return (
            <div className="home">
                <Navbar isAdmin={admin}/>
                    <div className="page-container">
                       <div className={classes.root}>
                            <Grid container spacing={3} className={classes.gridcontainer}>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <AdminProfileForm 
                                        adminData={associate}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
            </div>   
        );
    }
    else
    {
        return (
            <div className="home">
                <Navbar isAdmin={admin}/>
                    <div className="page-container">
                        <div className={classes.root}>
                            <Grid container spacing={3} className={classes.gridcontainer}>
                                <Grid item lg={3} md={3} sm={12} xs={12}>
                                    <UserMenu updateSelected={updateSelected} />
                                    <br/>
                                    <AssociateNumberCard associateNumber={635}/>
                                </Grid>
                                <Grid item lg={9} md={9} sm={12} xs={12}>
                                    <ProfileForm currentMenu={displayedForm} groups={groups} associate={associate}/>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
            </div>   
        );
    }
}