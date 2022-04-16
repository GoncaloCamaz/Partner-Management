import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Popup from '../components/popup/Popup'
import './Pages.css'
import AddressesTable from '../components/tables/AddressesTable';
import PartnershipAddresssForm from '../components/forms/PartnershipAddressForm';
import MessagesDisplay from '../components/forms/MessagesDisplayForm';

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

    addPartnershipAddressOnBackend = (values) => {

    }

    editPartnershipAddressOnBackend = (values) => {

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
				<div className="page-container">
					<AddressesTable 
						records={this.state.addressesList}
						handleAddAddress={this.handleAddAddress}
						handleEditAddress={this.handleEditAddress}
						handleRemoveAddress={this.handleRemoveAddress}
						handleReturnToPartnerships={this.handleReturnToPartnerships}
					/>
						<Popup 
						title={'Nova Morada'}
						openPopup={this.state.popupAddOpen}
						setOpenPopup={this.setOpenAddAddress}>
						<PartnershipAddresssForm 
							recordForEdit={null}
							addOrEdit={this.addPartnershipAddressOnBackend}
						/>
					</Popup>
					<Popup 
						title={'Editar Morada'}
						openPopup={this.state.popupEditOpen}
						setOpenPopup={this.setOpenPopupEditAddress}>
						<PartnershipAddresssForm 
							recordForEdit={this.state.recordForEdit}
							addOrEdit={this.editPartnershipAddressOnBackend}
						/>
					</Popup>
					<Popup 
						title={'Remover Morada'}
						openPopup={this.state.popupRemoveOpen}
						setOpenPopup={this.setOpenPopupRemoveAddress}>
						<MessagesDisplay 
							mainMessage={"Tens a certeza que pretendes apagar a morada " + this.state.recordForRemove + "?"}
						/>
					</Popup>
				</div>
            );
        }
    }    
}