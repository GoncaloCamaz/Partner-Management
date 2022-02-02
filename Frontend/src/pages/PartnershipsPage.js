import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Grid from '@material-ui/core/Grid';
import PartnershipsList from '../components/menus/PartnershipsList'
import PartnershipAddress from '../components/cards/PartnershipAddress';
import PartnershipAdvantages from '../components/cards/PartnershipAdvantages';
import PartnershipContacts from '../components/cards/PartnershipContacts';
import * as PartnershipsAPI from '../api/PartnershipsAPI'

class PartnershipsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            partnerships: [],
            isLoaded: false,
            currentPartnership: {},
            errorMessage: '',
            errorHasOccured: false
        }
    }

    componentDidMount() {
        const partnershipsList = this.props.context.state.partnerships || []
        if(partnershipsList.length === 0)
        {
            this.setState({isLoaded: false}, () => {
                this.fetchPartnerships()
            })
        }
        else
        {
            this.setState({
                partnerships: partnershipsList, 
                currentPartnership: partnershipsList[0] 
            }, () => {
                this.setState({isLoaded: true})
            })
        }
    }

    fetchPartnerships = async () => {
        const result = await PartnershipsAPI.getPartnerships().then((result) => {
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
            this.setState({
                partnerships: result.data, 
            }, () => {
                this.setState({ isLoaded: true})
            })
        }
    }

    handleUpdateSelectedPartnership = (value) => {
        this.setState({currentPartnership: this.state.partnerships[value]})
    }

    render() {
        const { partnerships, isLoaded } = this.state
        if(!isLoaded)
        {
            return (
                <h1>Loading</h1>
            );
        }
        else
        {
            return (
                <div style={{flexGrow: 1}}>
                    <Grid container spacing={3} style={{textAlign: 'center'}}>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <PartnershipsList partnerships={partnerships} updateSelected={this.handleUpdateSelectedPartnership}/>
                        </Grid>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <PartnershipAdvantages partnership={this.state.currentPartnership}/>
                            <br/>
                            <PartnershipAddress partnership={this.state.currentPartnership}/>
                            <br/>
                            <PartnershipContacts partnership={this.state.currentPartnership}/>
                        </Grid>
                    </Grid>
                </div>  
            );
        }
    }    
}


const PartnershipsPageContext = (props) => 
    <AppContext.Consumer>
        {
            context => <PartnershipsPage {...props} context={context}/>
        }
    </AppContext.Consumer>

export default withRouter(PartnershipsPageContext)
