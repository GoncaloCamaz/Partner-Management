import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import { Redirect } from 'react-router-dom';

import './Pages.css'
import AddressesTable from '../components/tables/AddressesTable';

export default class PartnershipAddressesPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            partnershipName: '',
            popupAddOpen: false,
            popupEditOpen: false,
            popupRemoveOpen: false,
            recordForEdit: null,
            recordForRemove: null,
            addressesFromProps: this.props.location.state.record,
            addressesList: [],
            returnToPartnershipsPage: false
        }
    }

    componentDidMount() {
        this.partnershipAddressesTableUpdate()
    }

    partnershipAddressesTableUpdate()
    {
        if(this.state.addressesFromProps !== undefined)
        {
            this.setState({
                addressesList: this.state.addressesFromProps.addresses, 
                partnershipName: this.state.addressesFromProps.name
            })
        }
        else
        {
        }
    }

    setOpenAddAddress = (value) => {
        this.setState({popupAddOpen: value})
    }

    setOpenPopupEditAddress = (value) => {
        this.setState({popupEditOpen: value})
    }

    setOpenPopupRemoveAddress = (value) => {
        this.setState({popupRemoveOpen: value})
    }

    handleAddAddress = (item) => {
        this.setOpenAddAddress(true)
    }

    handleEditAddress = (item) => {
        this.setState({recordForEdit: item})
        this.setOpenPopupEditAddress(true)
    }

    handleRemoveAddress = (item) => {
        this.setState({recordForRemove: item})
        this.setOpenPopupRemoveAddress(true)
    }

    handleReturnToPartnerships = () => {
        this.setState({returnToPartnershipsPage: true})
    }

    render() {
        const { returnToPartnershipsPage } = this.state

        if(returnToPartnershipsPage)
        {
            return <Redirect to={{
                pathname: "/admin/partnerships",
                }}
            />
        }
        else
        {
            return (
                <div className="home">
                    <Navbar isAdmin={true}/>
                        <div className="page-container">
                            <AddressesTable 
                                records={this.state.addressesList}
                                handleAddAddress={this.handleAddAddress}
                                handleEditAddress={this.handleEditAddress}
                                handleRemoveAddress={this.handleRemoveAddress}
                                handleReturnToPartnerships={this.handleReturnToPartnerships}
                            />
                        </div>
                </div>   
            );
        }
    }    
}