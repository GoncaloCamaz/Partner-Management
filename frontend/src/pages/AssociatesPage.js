import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import AssociatesTable from '../components/tables/AssociatesTable';
import Popup from '../components/popup/Popup'
import './Pages.css'
import CreateAssociateForm from '../components/forms/CreateAssociateForm';
import EditAssociateForm from '../components/forms/EditAssociateForm';
import { getAssociates,
     createNewAssociate, 
     updateAssociate, 
     deleteAssociate,
     getAssociateInformation ,
     resetPassword
    } from '../api/AssociatesAPI'
import { getGroups } from '../api/GroupsAPI'
import MessagesDisplay from '../components/forms/MessagesDisplayForm';
import AssociateAddresssForm from '../components/forms/AssociateAddressForm';
import AssociateGroupsForm from '../components/forms/AssociateGroupsForm';
import PaymentForm from '../components/forms/PaymentForm';
import { GroupContext } from '../context/GroupContext'

class AssociatesPage extends Component {
    static contextType = GroupContext
    
    constructor(props) {
        super(props)

        this.state = {
            associates: [],
            filteredAssociates: [],
            groups: [],
            groupsForTableSelect: [{id: 'All',key: 'All', title: 'All',name: 'All'}],
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
      //  this.associatesTableUpdate(true)
      this.setState({associates: [
                    {
                        associateNumber: 123, 
                        name: "Gonçalo Camaz", 
                        nickname: "Miadas", 
                        fee: "2021", 
                        phoneNumber: "914049105", 
                        email: "gcamaz@sapo.pt",
                        joinedIn: "2017",
                        address: "Rua do Socialismo 20",
                        city: "VIla do conde",
                        postalCode: "4485-032",
                        groups: ["TUM"]
                    },
                    {
                        associateNumber: 124, 
                        name: "Gonçalo Moreira", 
                        nickname: "Camadas", 
                        fee: "2020", 
                        phoneNumber: "914049023", 
                        email: "gcamaz@sapo.pt",
                        address: "Rua do Socialismo 90",
                        city: "VIla do conde",
                        postalCode: "4485-044",
                        joinedIn: "2016",
                        groups: ["Bomboémia"]
                    },
                    {
                        associateNumber: 124, 
                        name: "Gonçalo Moreira", 
                        nickname: "Camadas", 
                        fee: "2020", 
                        phoneNumber: "914049023", 
                        email: "gcamaz@sapo.pt",
                        joinedIn: "2016",
                        groups: ["Bomboémia"]
                    },
                    {
                        associateNumber: 124, 
                        name: "Gonçalo Moreira", 
                        nickname: "Camadas", 
                        fee: "2020", 
                        phoneNumber: "914049023", 
                        email: "gcamaz@sapo.pt",
                        joinedIn: "2016",
                        groups: ["Bomboémia"]
                    },
                    {
                        associateNumber: 124, 
                        name: "Gonçalo Moreira", 
                        nickname: "Camadas", 
                        fee: "2020", 
                        phoneNumber: "914049023", 
                        email: "gcamaz@sapo.pt",
                        joinedIn: "2016",
                        groups: ["Bomboémia"]
                    },
                    {
                        associateNumber: 124, 
                        name: "Gonçalo Dias Camaz Moreira", 
                        nickname: "Camadas", 
                        fee: "2020", 
                        phoneNumber: "914049023", 
                        email: "gcamaz@sapo.pt",
                        joinedIn: "2016",
                        groups: ["Bomboémia"]
                    },
                    {
                        associateNumber: 124, 
                        name: "Gonçalo Moreira", 
                        nickname: "Camadas", 
                        fee: "2020", 
                        phoneNumber: "914049023", 
                        email: "gcamaz@sapo.pt",
                        joinedIn: "2016",
                        groups: ["Bomboémia"]
                    },
            ],
            groups:  [{
                name: "Bomboémia",
                initials: "Bomboémia",
                imageURL: "http://arcum.pt/images/bomboemia/logo_full.png"
            },
            {
                name: "Grupo Folclórico da Universidade do Minho",
                initials: "GFUM",
                imageURL: "http://arcum.pt/images/gfum/logo.png"
            },
            {
                name: "Grupo de Música Popular da Universidade do Minho",
                initials: "GMP",
                imageURL: "http://arcum.pt/images/gmp/logo.png"
            },
            {
                name: "Grupo de Poesia da Universidade do Minho",
                initials: "GPUM",
                imageURL: "http://arcum.pt/images/gpum/logo_alt.png"
            },
            {
                name: "Tuna Universitária do Minho",
                initials: "TUM",
                imageURL: "http://arcum.pt/images/tum/logo.png"
            },
            {
                name: "Tun'ao Minho",
                initials: "Tun'ao Minho",
                imageURL: "http://arcum.pt/images/tunao/logo.png"
            }]
        }, () => {
            this.setState({filteredAssociates: this.state.associates})
            const groups = this.state.groups
            for(const i in groups)
            {
                this.state.groupsForTableSelect.push({id: groups[i].initials, key: groups[i].initials, name: groups[i].initials, title: groups[i].initials})
            }
        })
    }

    associatesTableUpdate(getGroups) {
        this.setState({isLoaded: false})

        const associates = getAssociates()
        
        if(getGroups)
        {
            const groups = getGroups()
            this.setState({groups: groups, associates: associates})
        }
        else 
        {
            this.setState({associates: associates})
        }

        this.setState({isLoaded: true})
    }

    addAssociateOnBackend(values) {
        console.log(values)
        const response = createNewAssociate(values)
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
        const response = updateAssociate(values)
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
        const response = updateAssociate(this.state.recordForRemove)
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
        const result = resetPassword(values.associateNumber)
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
        const { groups } = this.context
        console.log("context on component",groups)

        if(!isLoaded)
        {
            return (
                <div className="home">
                    <Navbar isAdmin="true"/>
                        <div className="page-container">
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
                                    groups={this.state.groups}
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
                                    groups={groups}
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
                </div>   
            )
        }
    }
}

export default AssociatesPage