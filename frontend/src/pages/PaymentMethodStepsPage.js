import React, { Component } from 'react';
import PaymentMethodStepsTable from '../components/tables/PaymentMethodStepsTable';
import Popup from '../components/popup/Popup'
import Navbar from '../components/navbar/Navbar'
import { Redirect } from 'react-router-dom';
import PaymentMethodStepForm from '../components/forms/PaymentMethodStepForm';

export default class PaymentMethodStepsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            popupAddOpen: false,
            popupEditOpen: false,
            popupRemoveOpen: false,
            recordForEdit: null,
            recordForRemove: null,
            returnToPaymentMethodsPage: false,
            paymentMethodName: this.props.location.state.paymentMethodName,
            paymentMethodSteps: this.props.location.state.steps,
            isLoaded: true
        }
    }

    componentDidMount(){
        //todo 
        console.log(this.state)
    }

    setOpenAddPopup = (value) => {
        this.setState({popupAddOpen: value})
    }

    setOpenEditPopup = (value) => {
        this.setState({popupEditOpen: value})
    }

    setOpenRemovePopup = (value) => {
        this.setState({popupRemoveOpen: value})
    }

    handleAddPaymentMethodStep = (item) => {
        this.setOpenAddPopup(true)
    }

    handleEditPaymentMethodStep = (item) => {
        this.setState({recordForEdit: item})
        this.setOpenEditPopup(true)
    }

    handleRemovePaymentMethodStep = (item) => {
        this.setState({recordForRemove: item})
        this.setOpenRemovePopup(true)
    }

    handleReturnToPaymentMethods = () => {
        this.setState({returnToPaymentMethodsPage: true})
    }

    render() {
        const {returnToPaymentMethodsPage} = this.state

        if(returnToPaymentMethodsPage)
        {
            return <Redirect to={{
                pathname: "/payments/methods",
                }}
            />
        }
        else
        {
            return(
                <div className="home">
                <Navbar isAdmin={true}/>
                    <div className="page-container">
                        <PaymentMethodStepsTable 
                            rows={this.state.paymentMethodSteps}
                            handleAddPaymentMethodStep={this.handleAddPaymentMethodStep}
                            handleEditPaymentMethodStep={this.handleEditPaymentMethodStep}
                            handleRemovePaymentMethodStep={this.handleRemovePaymentMethodStep}
                            handleReturnToPaymentMethods={this.handleReturnToPaymentMethods}
                        />
                        <Popup
                            title={"Adicionar Passo"}
                            openPopup={this.state.popupAddOpen}
                            setOpenPopup={this.setOpenAddPopup}>
                            <PaymentMethodStepForm
                                recordForEdit={null}
                                addOrEdit={this.addPaymntMethodOnBackend}
                            />
                        </Popup>
                        <Popup
                            title={"Editar Passo"}
                            openPopup={this.state.popupEditOpen}
                            setOpenPopup={this.setOpenEditPopup}>
                            <PaymentMethodStepForm
                                recordForEdit={this.state.recordForEdit}
                                addOrEdit={this.editPaymentMethodOnBackend}
                            />
                        </Popup>
                        <Popup
                            title={"Remover Passo"}
                            openPopup={this.state.popupRemoveOpen}
                            setOpenPopup={this.setOpenRemovePopup}>
                            <PaymentMethodStepForm
                                recordForEdit={this.state.recordForRemove}
                                addOrEdit={this.removePaymentMethodOnBackend}
                            />
                        </Popup>
                    </div>
            </div>   
            );
        }
    }
}