import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import PartnershipGrid from '../components/grids/PartnershipsGrid';
import './Pages.css'
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

class PartnershipsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            partnerships: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        const context = this.props.context.state.partnerships
        this.setState({partnerships: context},
            this.setState({isLoaded: true}))
    }

    render() {
        const { partnerships, isLoaded } = this.state

        if(!isLoaded)
        {
            return (
                <div className="home">
                    <Navbar/>
                        <div className="page-container">
                            Loading
                        </div>
                </div>   
            );
        }
        else
        {
            return (
                <div className="home">
                    <Navbar/>
                        <div className="page-container">
                            <PartnershipGrid partnerships={partnerships}/>
                        </div>
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
