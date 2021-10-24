import React, { Component } from 'react';
import PaymentMethodsTable from '../components/tables/PaymentMethodsTable';
import Popup from '../components/popup/Popup'
import Navbar from '../components/navbar/Navbar'
import { Redirect } from 'react-router-dom';
import PaymentMethodForm from '../components/forms/PaymentMethodForm';

export default class PaymentMethodsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            popupAddOpen: false,
            popupEditOpen: false,
            popupRemoveOpen: false,
            recordForEdit: null,
            recordForRemove: null,
            returnToMainPaymentPage: false,
            seeStepsPage: false,
            paymentMethodName: '',
            paymentMethodSteps: [],
            paymentMethods: [{name: "Presencial", steps: [{step_id: 1, step_name: "Enviar para o nib..."}]}
            , {name: "Transferência", steps: [{step_id: 1, step_name: "Enviar para o lá..."}]}],
            isLoaded: true
        }
    }

    componentDidMount(){
        //todo 
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

    handleAddPaymentMethod = (item) => {
        this.setOpenAddPopup(true)
    }

    handleEditPaymentMethod = (item) => {
        this.setState({recordForEdit: item})
        this.setOpenEditPopup(true)
    }

    handleRemovePaymentMethod = (item) => {
        this.setState({recordForRemove: item})
        this.setOpenRemovePopup(true)
    }

    handleSeeStepsPage = (item) => {
        const steps = this.state.paymentMethods.filter(elm => elm.name === item.name)
        this.setState({paymentMethodName: item.name, paymentMethodSteps: steps[0].steps})
        this.setState({seeStepsPage: true})
    }

    handleReturnToPayments = () => {
        this.setState({returnToMainPaymentPage: true})
    }

    render() {
        const {returnToMainPaymentPage, seeStepsPage} = this.state

        if(returnToMainPaymentPage)
        {
            return <Redirect to={{
                pathname: "/admin/payments",
                }}
            />
        }else if(seeStepsPage)
        {
            return <Redirect to={{
                pathname:"methods/steps",
                state: {
                    paymentMethodName: this.state.paymentMethodName,
                    steps: this.state.paymentMethodSteps
                }
            }}/>
        }
        else
        {
            return(
                <div className="home">
                <Navbar isAdmin={true}/>
                    <div className="page-container">
                        <PaymentMethodsTable 
                            rows={this.state.paymentMethods}
                            handleAddPaymentMethod={this.handleAddPaymentMethod}
                            handleEditPaymentMethod={this.handleEditPaymentMethod}
                            handleRemovePaymentMethod={this.handleRemovePaymentMethod}
                            handleSeeStepsPage={this.handleSeeStepsPage}
                            handleReturnToPayments={this.handleReturnToPayments}
                        />
                        <Popup
                            title={"Adicionar Método de Pagamento"}
                            openPopup={this.state.popupAddOpen}
                            setOpenPopup={this.setOpenAddPopup}>
                            <PaymentMethodForm
                                recordForEdit={null}
                                addOrEdit={this.addPaymntMethodOnBackend}
                            />
                        </Popup>
                        <Popup
                            title={"Editar Método de Pagamento"}
                            openPopup={this.state.popupEditOpen}
                            setOpenPopup={this.setOpenEditPopup}>
                            <PaymentMethodForm
                                recordForEdit={this.state.recordForEdit}
                                addOrEdit={this.editPaymentMethodOnBackend}
                            />
                        </Popup>
                        <Popup
                            title={"Remover Método de Pagamento"}
                            openPopup={this.state.popupRemoveOpen}
                            setOpenPopup={this.setOpenRemovePopup}>
                            <PaymentMethodForm
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