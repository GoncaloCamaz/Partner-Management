import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import AssociatesTable from '../components/tables/AssociatesTable';
import Popup from '../components/popup/Popup'
import './Pages.css'
import AssociateForm from '../components/forms/AssociateForm';
import { getAssociates,
     createNewAssociate, 
     updateAssociate, 
     deleteAssociate,
     getAssociateInformation ,
     resetPassword
    } from '../api/AssociatesAPI'
import { getGroups } from '../api/GroupsAPI'
import MessagesDisplay from '../components/forms/MessagesDisplayForm';

class AssociatesPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            associates: [],
            filteredAssociates: [],
            groups: [],
            recordForEdit: null,
            recordForRemove: null,
            popupAddAssociateOpen: false,
            popupEditAssociateOpen: false,
            popupRemoveAssociateOpen: false,
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
                        groups: ["TUM"]
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
            groups: [{
                id: "All", key: "All", title: "All", label: "All"
            },{
                id: "TUM", key: "TUM", title: "TUM", label: "TUM"
            }]
        }, () => {
            this.setState({filteredAssociates: this.state.associates})
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
      /*  const response = createNewAssociate(values)
        //TODO HANDLE RESPONSE
        if(response.status !== 200)
        {
            //check response error messages
            this.setState({errorMessage: "Alguma coisa correu mal TODO: ERROR"})
            this.setOpenErrorPopup(true)
        }
        this.associatesTableUpdate(false)
        */
    }

    editAssociateOnBackend(values) {
        console.log(values)
      /*  const response = updateAssociate(values)
        //TODO HANDLE RESPONSE
        if(response.status !== 200)
        {
            //check response error messages
            this.setState({errorMessage: "Alguma coisa correu mal TODO: ERROR"})
            this.setOpenErrorPopup(true)
        }
        this.associatesTableUpdate(false)
        */
    }

    removeAssociateOnBackend() {

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

    setOpenErrorPopup = (value) =>
    {
        this.setState({errorPopupOpen: value})
    }

    handleAddNewAssociate = () => {
        this.setOpenAddAssociatePopup(true)
    }

    handleEditAssociate = (associate) => {
        console.log("EDIT =>", associate)
        this.setState({recordForEdit: associate})
        this.setOpenEditAssociatePopup(true)
    }

    handleRemoveAssociate = (associate) => {
        console.log("REMOVE =>", associate)
        this.setState({recordForRemove: associate.associateNumber})
        this.setOpenRemoveAssociatePopup(true)
    }

    handleOpenAssociateAddress = (associate) => {
        console.log("OPEN ADDRESS =>", associate)
    }

    handleResetAssociatePassword = (associate) => {
        console.log("RESET PASSWORD =>", associate)
        const result = resetPassword(associate.associateNumber)
        console.log("RESULT RESET => ", result)
    }

    handleOpenAssociateGroups = (associate) => {
        console.log("SEE GROUPS =>", associate)
    }

    render () {
        const {isLoaded, filteredAssociates} = this.state

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
                                groups={this.state.groups}
                                handleAddNewAssociate={this.handleAddNewAssociate}
                                handleEditAssociate={this.handleEditAssociate}
                                handleRemoveAssociate={this.handleRemoveAssociate}
                                handleOpenAssociateAddress={this.handleOpenAssociateAddress}
                                handleResetAssociatePassword={this.handleResetAssociatePassword}
                                handleOpenAssociateGroups={this.handleOpenAssociateGroups}
                            />
                            <Popup 
                                title={'Novo Associado'}
                                openPopup={this.state.popupAddAssociateOpen}
                                setOpenPopup={this.setOpenAddAssociatePopup}>
                                <AssociateForm 
                                    recordForEdit ={this.state.recordForEdit}
                                    groups={this.state.groups}
                                    addOrEdit={this.addAssociateOnBackend}
                                />
                            </Popup>
                            <Popup 
                                title={'Editar Associado'}
                                openPopup={this.state.popupEditAssociateOpen}
                                setOpenPopup={this.setOpenEditAssociatePopup}>
                                <AssociateForm 
                                    recordForEdit ={this.state.recordForEdit}
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
                        </div>
                </div>   
            )
        }
    }
}

export default AssociatesPage