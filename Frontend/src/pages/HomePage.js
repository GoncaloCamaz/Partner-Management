import React from 'react';
import HomePageAdmin from './HomePageAdmin';
import HomePageUser from './HomePageUser';
import { Component } from 'react';
import { AppContext } from '../context/AppContext';
import * as AssociatesAPI from '../api/AssociatesAPI';
import * as GroupsAPI from '../api/GroupsAPI';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
            errorMessage: '',
            errorHasOccured: false,
            isLoaded: false,
            isAdmin: false
        }
    }

    componentDidMount(){
        const context = this.props.context.state
        if(context.authentication.isAuthenticated)
        {
            if(context.groups.length === 0)
            {
                this.fetchGroupData()
            }

            this.setState({isLoaded: false, isAdmin: context.authentication.isAdmin}, () => {
                this.fetchInitialData(context.authentication.email)
            })
        }
    }

    fetchInitialData = async (email) =>
    {
        const result = await AssociatesAPI.getInitialInformation(email).then((result) => {
            return result;
        }, (error) => {
            return error;
        })
        if(result.hasErrors)
        {
            this.setState({errorMessage: result.errorMessage, errorHasOccured: true},
                this.setState({
                    isLoaded: true
                }))
        }
        else
        {
            this.props.context.state.updateAssociate(result.data.associate, () => {
                this.props.context.state.updatePartnerships(result.data.partnerships, () => {
                    this.setState({ isLoaded: true})
                })
            })
        }
    }

    fetchGroupData = async () =>  
    {
        const result = await GroupsAPI.getGroups().then((result) => {
            return result;
        }, (error) => {
            return error;
        })

        if(result.hasErrors)
        {
            this.setState({errorMessage: result.errorMessage, errorHasOccured: true},
                this.setState({
                    isLoaded: true
                }))
        }
        else
        {
            this.props.context.state.updateGroups(result.data)
        }
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
            if(this.state.errorHasOccured)
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
                    return <HomePageUser />
                }
            }
        }
    }
}

const HomePageContext = (props) => 
    <AppContext.Consumer>
        {
            context => <HomePage {...props} context={context}/>
        }
    </AppContext.Consumer>

export default withRouter(HomePageContext)
