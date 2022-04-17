import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Popup from '../components/popup/Popup'
import './Pages.css'
import PartnershipsTable from '../components/tables/PartnershipsTable';
import PartnershipForm from '../components/forms/PartnershipForm';
import MessagesDisplayForm from '../components/forms/MessagesDisplayForm';

export default class PartnershipsAdminPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            popupAddOpen: false,
            popupEditOpen: false,
            popupRemoveOpen: false,
            openSeeAddressesPage: false,
            openSeeAdvantagesPage: false,
            recordForEdit: null,
            recordForRemove: null,
            partnerships: [],
            isLoaded: true
        }
    }

    componentDidMount() {
        this.partnershipsTableUpdate()
    }

	partnershipsTableUpdate() {

	}

    addPartnershipOnBackend = (item) => {

    }

    editPartnershipOnBackend = (item) => {

    }

    setOpenAddPartnershipPopup = (value) => {
        this.setState({popupAddOpen: value})
    }

    setOpenPopupEditPartnership = (value) => {
        this.setState({popupEditOpen: value})
    }

    setOpenPopupRemovePartnership = (value) => {
        this.setState({popupRemoveOpen: value})
    }

    handleAddPartnership = (item) => {
        this.setOpenAddPartnershipPopup(true)
    }

    handleSeeAddresses = (item) => {
        this.setState({recordForEdit: item, openSeeAddressesPage: true})
    }

    handleEditPartnership = (item) => {
        this.setState({recordForEdit: item})
        this.setOpenPopupEditPartnership(true)
    }

    handleRemovePartnership = (item) => {
        this.setState({recordForRemove: item.name})
        this.setOpenPopupRemovePartnership(true)
    }

    handleSeeAdvantages = (item) => {
        this.setState({recordForEdit: item, openSeeAdvantagesPage: true})
    }

    render() {
        const { partnerships, openSeeAddressesPage, openSeeAdvantagesPage } = this.state

        if(openSeeAddressesPage)
        {
            return <Redirect to={{
                        pathname: "partnerships/addresses",
                        state: {record: this.state.recordForEdit}
                }}
            />
        }
        else if(openSeeAdvantagesPage)
        {
            return <Redirect to={{
                pathname: "partnerships/advantages",
                state: {record: this.state.recordForEdit}
            }}
        />
        }
        else
        {
            return (
				<div className="page-container">
					<PartnershipsTable 
						rows={partnerships}
						handleAddPartnership={this.handleAddPartnership}
						handleSeeAddresses={this.handleSeeAddresses}
						handleEditPartnership={this.handleEditPartnership}
						handleRemovePartnership={this.handleRemovePartnership}
						handleSeeAdvantages={this.handleSeeAdvantages}
					/>
					<Popup 
						title={'Nova Parceria'}
						openPopup={this.state.popupAddOpen}
						setOpenPopup={this.setOpenAddPartnershipPopup}>
						<PartnershipForm 
							recordForEdit={null}
							addOrEdit={this.addPartnershipOnBackend}
						/>
					</Popup>
					<Popup 
						title={'Editar Parceria'}
						openPopup={this.state.popupEditOpen}
						setOpenPopup={this.setOpenPopupEditPartnership}>
						<PartnershipForm 
							recordForEdit={this.state.recordForEdit}
							addOrEdit={this.editPartnershipOnBackend}
						/>
					</Popup>
					<Popup 
						title={'Remover Parceria'}
						openPopup={this.state.popupRemoveOpen}
						setOpenPopup={this.setOpenPopupRemovePartnership}>
						<MessagesDisplayForm 
							mainMessage={"Tens a certeza que queres apagar a parceria: " + this.state.recordForRemove + " ?"}
							secundaryMessage={"Todas as vantagens e moradas relativas à mesma vão ser apagadas."}
							handleOk={this.removePartnershipOnBackend}
						/>
					</Popup>  
				</div>
            );
        }
    }
}    