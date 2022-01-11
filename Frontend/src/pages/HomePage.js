zimport React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar'
import { Context } from '../context/AuthContext';
import { GroupContext } from '../context/GroupContext';
import Paper from '@material-ui/core/Paper';
import Grid from '@mui/material/Grid';
import FeeCard from '../components/cards/FeeCard'
import ProfileCard from '../components/cards/ProfileCard'
import EcardDownloadCard from '../components/cards/EcardDownloadCard'
import ParthershipsCard from '../components/cards/PartnershipsCard'
import { Redirect } from 'react-router-dom';
import './Pages.css'
import HomePageAdmin from './HomePageAdmin';
import HomePageUser from './HomePageUser';
import { Component } from 'react';
import axios from "axios";
import { Context } from '../context/AuthContext'
import {backendURL} from '../constants'

class HomePage extends Component {
    static contextType = Context

    constructor(props){
        super(props)
        this.state={
            isLoaded: false,
            homePageContent: [],
            isAdmin: false
        }
    }


    componentDidMount(){
        const adminInformation = localStorage.getItem("isAdmin") === "true" || false
        if(adminInformation === true)
        {
            this.setState({isAdmin: true}, () => {
                this.setState({isLoaded: true})
            })
        }        
        else
        {
            this.fetchUserData("gcamaz@sapo.pt")
        }

    }

    fetchUserData(email)
    {
        let path = backendURL + "all/"+email
        const requestparams = {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }       
        }
        axios.get(path, requestparams)
        .then((response) => {
            this.setState({homePageContent: response.data}, () => {
                this.setState({isLoaded: true})
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({isLoaded: true})
        })
    }

    render() {
        if(this.state.isAdmin === true)
        {
            return <HomePageAdmin />
            
        }
        else
        {
            return <HomePageUser content={this.state.homePageContent} />
        }
    }
}

export default HomePage
