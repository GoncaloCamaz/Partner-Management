import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import AssociatesTable from '../components/tables/AssociatesTable';
import Popup from '../components/popup/Popup'
import './Pages.css'
import CreateAssociateForm from '../components/forms/CreateAssociateForm';
import EditAssociateForm from '../components/forms/EditAssociateForm';
import * as AssociatesAPI from '../api/AssociatesAPI';
import * as PaymentsAPI from '../api/PaymentsAPI';
import MessagesDisplay from '../components/forms/MessagesDisplayForm';
import AssociateAddresssForm from '../components/forms/AssociateAddressForm';
import AssociateGroupsForm from '../components/forms/AssociateGroupsForm';
import PaymentForm from '../components/forms/PaymentForm';

class AssociatesPage extends Component {    
    constructor(props) {
        super(props)

        this.state = {
            associates: [],
            filteredAssociates: [],
            groups: [],
            groupsForTableSelect: [],
            recordForEdit: null,
            recordForRemove: null,
            popupAddAssociateOpen: false,
            popupEditAssociateOpen: false,
            popupRemoveAssociateOpen: false,
            popupSeeAddressOpen: false,
            popupSeeAssociateGroupsOpen: false,
            popupResetPassword: false,
            popupRegistPaymentOpen: false,
            errorMessage: '',
            errorPopupOpen: false,
            isLoaded: false
        }
    }

    componentDidMount() {
        const groups = this.props.context.state.groups
        if(groups.length > 0)
        {
            let groupsForSelect = [];
            groupsForSelect.push({id: 'All',key: 'All', title: 'All',name: 'All'})
            groups.forEach(group => groupsForSelect.push({id: group.initials, key: group.initials, name: group.initials, title: group.initials}))

            this.setState({groups: groups, groupsForTableSelect: groupsForSelect})
        }
        this.associatesTableUpdate()        
    }

    associatesTableUpdate = async () => {
        this.setState({isLoaded: false})

        const result = await AssociatesAPI.getAssociates().then((result) => {
            return result;
        }, (error) => {
            return error;
        })
        console.log(result)
        if(result.hasErrors)
        {
            this.setState({errorMessage: result.errorMessage, errorPopupOpen: true},
                this.setState({
                    isLoaded: true
                }))
        }
        else
        {
            this.setState({
                associates: result.data,
                filteredAssociates: result.data
            }, () => {
                this.setState({ isLoaded: true})
            })
        }
        

        this.setState({isLoaded: true})
    }

    addAssociateOnBackend(values) {
        console.log(values)
        const response = AssociatesAPI.createNewAssociate(values)
        //TODO HANDLE RESPONSE
        if(response.status !== 200)
        {
            //check response error messages
            this.setState({errorMessage: "Alguma coisa correu mal TODO: ERROR"})
            this.setOpenErrorPopup(true)
        }
        this.associatesTableUpdate(false)
    }

    editAssociateOnBackend(values) {
        console.log(values)
        const response = AssociatesAPI.updateAssociate(values)
        //TODO HANDLE RESPONSE
        if(response.status !== 200)
        {
            //check response error messages
            this.setState({errorMessage: "Alguma coisa correu mal TODO: ERROR"})
            this.setOpenErrorPopup(true)
        }
        this.associatesTableUpdate(false)
    }

    removeAssociateOnBackend() {
        console.log(this.state.recordForRemove)
        const response = AssociatesAPI.updateAssociate(this.state.recordForRemove)
        //TODO HANDLE RESPONSE
        if(response.status !== 200)
        {
            //check response error messages
            this.setState({errorMessage: "Alguma coisa correu mal TODO: ERROR"})
            this.setOpenErrorPopup(true)
        }
        this.associatesTableUpdate(false)
    }

    resetPasswordOnBackend(values)
    {
        const result = AssociatesAPI.resetPassword(values.associateNumber)
        if(result.status !== 200)
        {
            //check response error messages
            this.setState({errorMessage: "Alguma coisa correu mal TODO: ERROR"})
            this.setOpenErrorPopup(true)
        }
    }

    submitPayment = (items) => {
        console.log(items)
        //todo
        this.setOpenPaymentPopup(false)
    }


    handleReset = () => {
        const associates = this.state.associates
        this.setState({filteredAssociates: associates})
    }

    handleSearch = (values) => {
        var records = this.state.associates
        if(values !== 'All')
        {
            const searchResult = records.filter(item => item.groups.includes(values))
            this.setState({filteredAssociates: searchResult})
        }
        else
        {
            this.handleReset()
        }
    }

    setOpenAddAssociatePopup = (value) =>
    {
        this.setState({popupAddAssociateOpen: value})
    }

    setOpenEditAssociatePopup = (value) => {
        this.setState({popupEditAssociateOpen: value})
    }

    setOpenRemoveAssociatePopup = (value) => {
        this.setState({popupRemoveAssociateOpen: value})
    }

    setOpenPaymentPopup = (value) => {
        this.setState({popupRegistPaymentOpen: value})
    }

    setOpenErrorPopup = (value) =>
    {
        this.setState({errorPopupOpen: value})
    }

    setOpenSeeAddressPopup = (value) => {
        this.setState({popupSeeAddressOpen: value})
    }

    setOpenSeeAssociateGroups = (value) => {
        this.setState({popupSeeAssociateGroupsOpen: value})
    }

    setOpenResetPasswordPopup = (value) => {
        this.setState({popupResetPassword: value})
    }

    handleAddNewAssociate = () => {
        this.setOpenAddAssociatePopup(true)
    }

    handleEditAssociate = (associate) => {
        this.setState({recordForEdit: associate})
        this.setOpenEditAssociatePopup(true)
    }

    handleRemoveAssociate = (associate) => {
        this.setState({recordForRemove: associate.associateNumber})
        this.setOpenRemoveAssociatePopup(true)
    }

    handleOpenAssociateAddress = (associate) => {
        this.setState({recordForEdit: associate})
        this.setOpenSeeAddressPopup(true)
    }

    handleResetAssociatePassword = (associate) => {
        this.setState({recordForRemove: associate.associateNumber})
        this.setOpenResetPasswordPopup(true)
    }

    handleOpenAssociateGroups = (associate) => {
        this.setState({recordForEdit: associate})
        this.setOpenSeeAssociateGroups(true)
    }

    handleRegistPayment = (values) => {
        const associate = {...values, associateName: values.name}
        this.setState({recordForEdit: associate})
        this.setOpenPaymentPopup(true)
    }

    render () {
        const {isLoaded, filteredAssociates } = this.state

        if(!isLoaded)
        {
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            )
        }
        else
        {
            return (
                <div>
                    <AssociatesTable 
                        records={filteredAssociates} 
                        handleReset={this.handleReset}
                        handleSearch={this.handleSearch}
                        groups={this.state.groupsForTableSelect}
                        handleAddNewAssociate={this.handleAddNewAssociate}
                        handleEditAssociate={this.handleEditAssociate}
                        handleRemoveAssociate={this.handleRemoveAssociate}
                        handleOpenAssociateAddress={this.handleOpenAssociateAddress}
                        handleResetAssociatePassword={this.handleResetAssociatePassword}
                        handleOpenAssociateGroups={this.handleOpenAssociateGroups}
                        handleRegistPayment={this.handleRegistPayment}
                    />
                    <Popup 
                        title={'Novo Associado'}
                        openPopup={this.state.popupAddAssociateOpen}
                        setOpenPopup={this.setOpenAddAssociatePopup}>
                        <CreateAssociateForm 
                            recordForEdit ={this.state.recordForEdit}
                            groups={this.state.groupsForTableSelect}
                            addOrEdit={this.addAssociateOnBackend}
                        />
                    </Popup>
                    <Popup 
                        title={'Registar Pagamento'}
                        openPopup={this.state.popupRegistPaymentOpen}
                        setOpenPopup={this.setOpenPaymentPopup}>
                        <PaymentForm 
                            recordForEdit ={this.state.recordForEdit}
                            addOrEdit={this.submitPayment}
                        />
                    </Popup>
                    <Popup 
                        title={'Editar Associado'}
                        openPopup={this.state.popupEditAssociateOpen}
                        setOpenPopup={this.setOpenEditAssociatePopup}>
                        <EditAssociateForm 
                            recordForEdit ={this.state.recordForEdit}
                            addOrEdit={this.editAssociateOnBackend}
                        />
                    </Popup>
                    <Popup 
                        title={'Morada do Associado'}
                        openPopup={this.state.popupSeeAddressOpen}
                        setOpenPopup={this.setOpenSeeAddressPopup}>
                        <AssociateAddresssForm 
                            recordForEdit ={this.state.recordForEdit}
                            addOrEdit={this.editAssociateOnBackend}
                        />
                    </Popup>
                    <Popup 
                        title={'Grupos do Associado'}
                        openPopup={this.state.popupSeeAssociateGroupsOpen}
                        setOpenPopup={this.setOpenSeeAssociateGroups}>
                        <AssociateGroupsForm 
                            recordForEdit={this.state.recordForEdit}
                            groups={this.state.groups}
                            addOrEdit={this.editAssociateOnBackend}
                        />
                    </Popup>
                    <Popup 
                        title={'Remover Associado'}
                        openPopup={this.state.popupRemoveAssociateOpen}
                        setOpenPopup={this.setOpenRemoveAssociatePopup}>
                        <MessagesDisplay 
                            mainMessage={"Tens a certeza que queres apagar o associado com o número: " + this.state.recordForRemove + " ?"}
                            secundaryMessage={"Os registos de pagamentos e informações serão mantidos."}
                            handleOk={this.removeAssociateOnBackend}
                        />
                    </Popup>
                    <Popup 
                        title={'Reset das Credênciais do Associado'}
                        openPopup={this.state.popupResetPassword}
                        setOpenPopup={this.setOpenResetPasswordPopup}>
                        <MessagesDisplay 
                            mainMessage={"As credênciais do associado: " + this.state.recordForRemove + " vão ser atualizadas."}
                            secundaryMessage={"As novas credênciais vão ser enviadas para o email do associado."}
                            handleOk={this.resetPasswordOnBackend}
                        />
                    </Popup>
                </div>
            )
        }
    }
}

const AssociatesPageContext = (props) => 
    <AppContext.Consumer>
        {
            context => <AssociatesPage {...props} context={context}/>
        }
    </AppContext.Consumer>

export default withRouter(AssociatesPageContext)
