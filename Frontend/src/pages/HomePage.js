import React from 'react';
import { Context } from '../context/AuthContext';
import { GroupContext } from '../context/GroupContext';
import './Pages.css'
import HomePageAdmin from './HomePageAdmin';
import HomePageUser from './HomePageUser';
import { Component } from 'react';
import axios from "axios";
import {backendURL} from '../constants'

class HomePage extends Component {
    static contextType = Context

    constructor(props){
        super(props)
        this.state={
            errorMessage: '',
            authenticationError: false,
            isLoaded: false,
            associate: {},
            partnerships: [],
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
            if(response.status === 200)
            {
                const data = response.data
                this.setState({associate: data.associate, partnerships: data.partnerships}, () => {
                    this.setState({isLoaded: true})
                })
            }
        })
        .catch(error => {
            this.setState({errorMessage: error.message}, () => {
                this.setState({authenticationError: true}, () => {
                    this.setState({isLoaded: true})
                })
            })
        })
    }

    render() {
        if(!this.state.isLoaded)
        {
            return <div>
                <h1>TODO: Loading page</h1>
            </div>
        }
        else
        {
            if(this.state.authenticationError)
            {
                return <div>
                <h1>TODO: Error page {this.state.errorMessage}</h1>
            </div>
            }
            else
            {
                if(this.state.isAdmin === true)
                {
                    return <HomePageAdmin />
                    
                }
                else
                {
                    return <HomePageUser associate={this.state.associate} partnerships={this.state.partnerships}/>
                }
            }
        }
    }
}

export default HomePage
