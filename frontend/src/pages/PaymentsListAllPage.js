import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import PaymentsTable from '../components/tables/PaymentsTable';
import { Redirect } from 'react-router-dom';
import Popup from '../components/popup/Popup'
import PaymentForm from '../components/forms/PaymentForm';
import MessagesDisplay from '../components/forms/MessagesDisplayForm';

export default class PaymentsListAllPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            popupAddOpen: false,
            popupEditOpen: false,
            popupRemoveOpen: false,
            recordForEdit: null,
            recordForRemove: null,
            returnToMainPaymentPage: false,
            payments: [],
            isLoaded: true
        }
    }

    componentDidMount(){

    }

    submitPayment = (item) => {
        console.log(item)
        //todo
        this.setOpenPopupAddPayment(false)
    }

    submitEditPayment = (item) => {
        console.log(item)
        //todo
        this.setOpenPopupEditPayment(false)
    }

    submitRemovePayment = (item) => {
        console.log(item)
        //todo
        this.setOpenPopupRemovePayment(false)
    }

    handleOpenAddPayment = (item) => {
        this.setOpenPopupAddPayment(true)
    }

    handleEditPayment = (item) => {
        this.setState({recordForEdit: item})
        this.setOpenPopupEditPayment(true)
    }

    handleRemovePayment = (item) => {
        this.setState({recordForRemove: item})
        this.setOpenPopupRemovePayment(true)
    }

    handleReturnToPayments = () => {
        this.setState({returnToMainPaymentPage: true})
    }

    setOpenPopupAddPayment = (value) => {
        this.setState({popupAddOpen: value})
    }
    
    setOpenPopupEditPayment = (value) => {
        this.setState({popupEditOpen: value})
    }

    setOpenPopupRemovePayment = (value) => {
        this.setState({popupRemoveOpen: value})
    }

    render() {
        const {returnToMainPaymentPage} = this.state

        if(returnToMainPaymentPage)
        {
            return <Redirect to={{
                pathname: "/admin/payments",
                }}
            />
        }
        else
        {
            return(
                <div className="home">
                <Navbar isAdmin={true}/>
                    <div className="page-container">
                        <PaymentsTable 
                            rows={this.state.payments}
                            handleOpenAddPayment={this.handleOpenAddPayment}
                            handleEditPayment={this.handleEditPayment}
                            handleRemovePayment={this.handleRemovePayment}
                            handleReturnToPayments={this.handleReturnToPayments}
                        />
                         <Popup 
                            title={'Registar Pagamento'}
                            openPopup={this.state.popupAddOpen}
                            setOpenPopup={this.setOpenPopupAddPayment}>
                            <PaymentForm 
                                recordForEdit={null}
                                addOrEdit={this.submitPayment}
                            />
                        </Popup>
                        <Popup 
                            title={'Editar Pagamento'}
                            openPopup={this.state.popupEditOpen}
                            setOpenPopup={this.setOpenPopupEditPayment}>
                            <PaymentForm 
                                recordForEdit={this.state.recordForEdit}
                                addOrEdit={this.submitEditPayment}
                            />
                        </Popup>
                        <Popup 
                            title={'Remover Pagamento'}
                            openPopup={this.state.popupRemoveOpen}
                            setOpenPopup={this.setOpenPopupRemovePayment}>
                            <MessagesDisplay 
                                mainMessage={this.state.recordForRemove}
                                handleOk={this.submitRemovePayment}
                            />
                        </Popup>
                    </div>
            </div>   
            );
        }
    }
}