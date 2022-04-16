import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@mui/material/Grid';
import FeeCard from '../components/cards/FeeCard'
import ProfileCard from '../components/cards/ProfileCard'
import EcardDownloadCard from '../components/cards/EcardDownloadCard'
import ParthershipsCard from '../components/cards/PartnershipsCard'
import { Redirect } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { withRouter } from 'react-router-dom';
import { Component } from 'react';

class HomePageUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            associate: this.props.context.state.associate || {},
            groups: this.props.context.state.groups || [],
            partnerships: this.props.context.state.partnerships || [],
            isLoaded: true,
            cardClicked: false,
            cardClickedName: '',
            contentToShareWithProps: {}
        }
    }

    handleSeeFees = () => {
        this.setState({cardClickedName: "payments"}, () => {
            this.setState({cardClicked: true})
        })
    }

    handleSeeProfile = () => {
        this.setState({cardClickedName: "profile"}, () => {
            this.setState({contentToShareWithProps: this.state.associate}, () => {
                this.setState({cardClicked: true})
            })
        })
    }

    handleSeePartnerships = () => {
        this.setState({cardClickedName: "partnerships"}, () => {
            this.setState({contentToShareWithProps: this.state.partnerships}, () => {
                this.setState({cardClicked: true})
            })
        })
    }

    render() {
        if(this.state.cardClicked)
        {
            return <Redirect push to={{pathname: this.state.cardClickedName, content: this.state.contentToShareWithProps}}/>
        }
        else
        {
            if(!this.state.isLoaded)
            {
                return <div>
                    <h1>TODO: Loading page</h1>
                </div>
            }
            else
            {
                return (
                    <Grid container columnSpacing={3} >
                        <Grid item lg={6} md={6} sm={12} xs={12}> 
                            <Paper style={{marginBottom: '20px'}}>
                                <ProfileCard associate={this.state.associate} handleSeeProfile={this.handleSeeProfile}/>
                            </Paper>
                            <Paper style={{marginBottom: '20px'}}>
                                <EcardDownloadCard associate={this.state.associate}/>
                            </Paper>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Paper style={{marginBottom: '20px'}}>
                                <FeeCard associate={this.state.associate} handleSeeFees={this.handleSeeFees}/>
                            </Paper>
                            <Paper style={{marginBottom: '20px'}}>
                                <ParthershipsCard partnerships={this.state.partnerships} handleSeePartnerships={this.handleSeePartnerships}/>
                            </Paper>
                        </Grid>
                    </Grid>
                );
            }
        }
    }
}

const HomePageUserContext = (props) => 
    <AppContext.Consumer>
        {
            context => <HomePageUser {...props} context={context}/>
        }
    </AppContext.Consumer>

export default withRouter(HomePageUserContext)