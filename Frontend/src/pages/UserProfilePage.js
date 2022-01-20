import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import Grid from '@material-ui/core/Grid';
import UserMenu from '../components/menus/UserInfoMenu'
import ProfileForm from '../components/forms/ProfileForm'
import AssociateNumberCard from '../components/cards/AssociateNumberCard';
import './Pages.css'
import AdminProfileForm from '../components/forms/AdminProfileForm';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import * as AssociatesAPI from '../api/AssociatesAPI';

class UserProfilePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAdmin: false,
            isLoaded: false,
            groups: [],
            associate: {},
            displayedForm: 0
        }
    }

    componentDidMount() {
        const context = this.props.context.state
        this.setState({associate: context.associate, groups: context.groups}, () => {
            this.setState({isLoaded: true})
        })
    }

    handleUpdateFormSelected = (selected) => {
        this.setState({displayedForm: selected})
    }

    render() {
        if(!this.state.isLoaded)
        {
            return <div>
            <h1>TODO: Loading page in userprofilepage</h1>
        </div>
        }
        else
        {
            if(this.state.isAdmin)
            {
                return (
                    <div className="home">
                        <Navbar />
                            <div className="page-container">
                               <div style={{flexGrow: 1}}>
                                    <Grid container spacing={3} style={{textAlign: 'center'}}>
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <AdminProfileForm 
                                                adminData={this.state.associate}
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
                        <Navbar />
                            <div className="page-container">
                                <div style={{flexGrow: 1}}>
                                    <Grid container spacing={3} style={{textAlign: 'center'}}>
                                        <Grid item lg={3} md={3} sm={12} xs={12}>
                                            <UserMenu updateSelected={this.handleUpdateFormSelected} />
                                            <br/>
                                            <AssociateNumberCard associateNumber={this.state.associate.associateNumber}/>
                                        </Grid>
                                        <Grid item lg={9} md={9} sm={12} xs={12}>
                                            <ProfileForm currentMenu={this.state.displayedForm} groups={this.state.groups} associate={this.state.associate}/>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                    </div>   
                );
            }
        }
    }
}

const ProfilePageContext = (props) => 
    <AppContext.Consumer>
        {
            context => <UserProfilePage {...props} context={context}/>
        }
    </AppContext.Consumer>

export default withRouter(ProfilePageContext)
