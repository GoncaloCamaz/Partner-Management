import React from 'react';
import './Pages.css'
import { connect } from 'react-redux'
import HomePageAdmin from './HomePageAdmin';
import HomePageUser from './HomePageUser';
import { Component } from 'react';
import { getInitialInformation } from '../api/AssociatesAPI';

class HomePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            isAdmin: false,
            isLoaded: false,
            homePageContent: {},
        }
    }

    componentDidMount(){
        const stateFromRedux = this.props.authState
        if(stateFromRedux.isAdmin === true)
        {
            this.setState({isAdmin: true})
        }        
        else
        {
            this.fetchUserData(stateFromRedux.email)
        }
    }

    fetchUserData(email)
    {
        const data = getInitialInformation(email);
        this.setState({homePageContent: data}, () => {
            this.setState({isLoaded: true})
        })
    }

    render() {
        if(this.state.isLoaded === false)
        {
            return (
                <div>
                    <h1>TODO: LOADING PAGE</h1>
                </div>
            )
        }
        else
        {
            if(this.state.isAdmin === true)
            {
                return (
                    <HomePageAdmin />
                );
            }
            else
            {
                return (
                    <HomePageUser content={this.state.homePageContent}/>
                );
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
      ...state
    }
  }

export default connect(mapStateToProps)(HomePage);