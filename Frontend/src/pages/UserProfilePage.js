import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import UserMenu from '../components/menus/UserInfoMenu'
import ProfileForm from '../components/forms/ProfileForm'
import AssociateNumberCard from '../components/cards/AssociateNumberCard';
import AdminProfileForm from '../components/forms/AdminProfileForm';
import Alerts from '../components/alerts/Alerts'
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import * as AssociatesAPI from '../api/AssociatesAPI';

class UserProfilePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAdmin: false,
            isLoaded: false,
            errorHasOccured: false,
            errorMessage: '',
            groups: [],
            associate: {},
            displayedForm: 0,
            alertType: '',
            showAlert: false,
            alertMessage: ''
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

    handleUpdateAssociate = async (associate) => {
        const result = await AssociatesAPI.updateAssociate(associate).then((result) => {
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
            this.setState({isLoaded: false}, () => {
                this.props.context.state.updateAssociate(result.data, () => {
                    this.setState({
                        associate: result.data, 
                        alertMessage: "Informações Atualizadas",
                        alertType: 'SUCCESS',
                        showAlert: true
                    }, () => {
                        this.setState({ isLoaded: true})
                    })
                })
            })
        }
    }

    handleUpdateAssociateCredentials = async (associate) => {
        const result = await AssociatesAPI.updateAssociateCredentials(associate).then((result) => {
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
            this.props.context.state.updateAssociate(result.data, () => {
                this.setState({associate: result.data}, () => {
                    this.setState({isLoaded: true})
                })
            })
        }
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
            if(this.state.errorHasOccured)
            {
                return <div>
            <h1>TODO: error page in userprofilepage</h1>
        </div>
            }
            else
            {
                if(this.state.isAdmin)
                {
                    return (
                        <div style={{flexGrow: 1}}>
                            <Grid container spacing={3} style={{textAlign: 'center'}}>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <AdminProfileForm 
                                        adminData={this.state.associate}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    );
                }
                else
                {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'space-around', flexGrow: 1}}>
                            <Alerts 
                                alertMessage={this.state.alertMessage} 
                                alertType={this.state.alertType}
                                showAlert={this.state.showAlert}
                                timeout={5000}
                            />
                                <Grid container spacing={3} style={{textAlign: 'center'}}>
                                    <Grid item lg={3} md={3} sm={12} xs={12}>
                                        <UserMenu updateSelected={this.handleUpdateFormSelected} />
                                        <br/>
                                        <AssociateNumberCard associateNumber={this.state.associate.associateNumber}/>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={12} xs={12}>
                                        <ProfileForm 
                                            currentMenu={this.state.displayedForm} 
                                            groups={this.state.groups} 
                                            associate={this.state.associate} 
                                            updateAssociate={this.handleUpdateAssociate}
                                            updateAssociateCredentials={this.handleUpdateAssociateCredentials}
                                        />
                                    </Grid>
                                </Grid>
                        </div>
                    );
                }
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
