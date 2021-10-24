import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import PaymentsTable from '../components/tables/PaymentsTable';
import { Redirect } from 'react-router-dom';

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

    handleAddPayment = (item) => {
        
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
                pathname: "/payments",
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
                            handleOpenAddPayment={this.handleAddPayment}
                            handleEditPayment={this.handleEditPayment}
                            handleRemovePayment={this.handleRemovePayment}
                            handleReturnToPayments={this.handleReturnToPayments}
                        />
                    </div>
            </div>   
            );
        }
    }
}