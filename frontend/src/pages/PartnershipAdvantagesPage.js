import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import { Redirect } from 'react-router-dom';
import './Pages.css'
import AdvantagesTable from '../components/tables/AdvantagesTable';

export default class PartnershipAdvantagesPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            partnershipName: '',
            popupAddOpen: false,
            popupEditOpen: false,
            popupRemoveOpen: false,
            recordForEdit: null,
            recordForRemove: null,
            advantagesFromProps: this.props.location.state.record,
            advantagesList: [],
            returnToPartnershipsPage: false
        }
    }

    componentDidMount() {
        this.partnershipAdvantagesTableUpdate()
    }

    partnershipAdvantagesTableUpdate()
    {
        if(this.state.advantagesFromProps !== undefined)
        {
            this.setState({
                advantagesList: this.state.advantagesFromProps.advantages, 
                partnershipName: this.state.advantagesFromProps.name
            })
        }
        else
        {
        }
    }

    setOpenAddPopup = (value) => {
        this.setState({popupAddOpen: value})
    }

    setOpenPopupEditPartnership = (value) => {
        this.setState({popupEditOpen: value})
    }

    setOpenPopupRemovePartnership = (value) => {
        this.setState({popupRemoveOpen: value})
    }
    
    handleReturnToPartnerships = () => {
        this.setState({returnToPartnershipsPage: true})
    }

    handleAddAdvantage = () => {
        this.setOpenAddPopup(true)
    }

    handleEditAdvantage = (item) => {
        this.setState({recordForEdit: item})
        this.setOpenPopupEditPartnership(true)
    }

    handleRemoveAdvantage = (item) => {
        this.setState({recordForRemove: item})
        this.setOpenPopupRemovePartnership(true)
    }

    render() {
        const { returnToPartnershipsPage } = this.state

        if(returnToPartnershipsPage)
        {
            return <Redirect to={{
                pathname: "/partnerships",
                }}
            />
        }
        else
        {
            return (
                <div className="home">
                    <Navbar isAdmin={true}/>
                        <div className="page-container">
                            <AdvantagesTable 
                                records={this.state.advantagesList}
                                handleAddAdvantage={this.handleAddAdvantage}
                                handleEditAdvantage={this.handleEditAdvantage}
                                handleRemoveAdvantage={this.handleRemoveAdvantage}
                                handleReturnToPartnerships={this.handleReturnToPartnerships}
                            />
                        </div>
                </div>   
            );
        }
    }    
}