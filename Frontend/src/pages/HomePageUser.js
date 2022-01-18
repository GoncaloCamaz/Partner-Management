import React from 'react';
import Navbar from '../components/navbar/Navbar'
import Paper from '@material-ui/core/Paper';
import Grid from '@mui/material/Grid';
import FeeCard from '../components/cards/FeeCard'
import ProfileCard from '../components/cards/ProfileCard'
import EcardDownloadCard from '../components/cards/EcardDownloadCard'
import ParthershipsCard from '../components/cards/PartnershipsCard'
import { Redirect } from 'react-router-dom';
import './Pages.css'
import { GroupContext } from '../context/GroupContext';
import { withRouter } from 'react-router-dom';
import { Component } from 'react';

class HomePageUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            associate: props.associate || {},
            partnerships: props.partnerships || [],
            isLoaded: false,
            cardClicked: false,
            cardClickedName: '',
            contentToShareWithProps: {}
        }
    }

    componentDidMount() {
        console.log(this.props)
        const groupsFromContext = this.props.groups
        if(groupsFromContext.length === 0)
        {
            this.props.handleGetGroups()
            console.log(this.props)
        }
    }

    handleSeeFees() {
        this.setState({cardClickedName: "payments"}, () => {
            this.setState({cardClicked: true})
        })
    }

    handleSeeProfile() {
        this.setState({cardClickedName: "profile"}, () => {
            this.setState({contentToShareWithProps: this.state.associate}, () => {
                this.setState({cardClicked: true})
            })
        })
    }

    handleSeePartnerships() {
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
            return (
                <div className="home">
                    <Navbar/>
                    <div className="page-container">
                        <div style={{flexGrow: 1, maxHeight: 'fit-content', height: '100%'}}>
                            <Grid container columnSpacing={3} style={{textAlign: 'center'}} >
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Paper style={{backgroundColor:'#060b26'}}>
                                        <ProfileCard associate={this.state.associate} handleSeeProfile={this.handleSeeProfile}/>
                                    </Paper>
                                    <br/>
                                    <Paper style={{backgroundColor:'#060b26'}}>
                                        <EcardDownloadCard associate={this.state.associate} arcumImage={"http://arcum.pt/images/logos/arcum.png"}/>
                                    </Paper>
                                    <br/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Paper style={{backgroundColor:'#060b26'}}>
                                        <FeeCard associate={this.state.associate} handleSeeFees={this.handleSeeFees}/>
                                    </Paper>
                                    <br/>
                                    <Paper style={{backgroundColor:'#060b26'}}>
                                        <ParthershipsCard partnerships={this.state.partnerships} handleSeePartnerships={this.handleSeePartnerships}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>   
            );
        }
    }
}

const HomePageUserContext = (props) => 
    <GroupContext.Consumer>
        {
            context => <HomePageUser {...props} groups={context.groups} handleGetGroups={context.handleGetGroups} />
        }
    </GroupContext.Consumer>

    export default withRouter(HomePageUserContext)