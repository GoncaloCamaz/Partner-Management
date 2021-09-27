import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import './Pages.css'
import GroupsTable from '../components/tables/GroupsTable';
import GroupForm from '../components/forms/GroupForm';
import Popup from '../components/popup/Popup'
import MessagesDisplay from '../components/forms/MessagesDisplayForm';

export default class GroupsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            groups: [],
            popupAddGroupOpen: false,
            popupEditGroupOpen: false,
            popupRemoveGroupOpen: false,
            recordForEdit: null,
            recordForRemove: null,
            isLoaded: false
        }
    }

    componentDitMount() {
        //this.groupsTableUpdate()
        this.state({groups: [{name: "Tuna Universitária do Minho", initials: "TUM",imageURL:"https://tumimage.com"}] })
    }

    groupsTableUpdate() {
        console.log("TODO: update function")
    }

    setOpenPopupAddGroup = (value) => {
        this.setState({popupAddGroupOpen: value})
    }

    setOpenPopupEditGroup = (value) => {
        this.setState({popupEditGroupOpen: value})
    }

    setOpenPopupRemoveGroup = (value) => {
        this.setState({popupRemoveGroupOpen: value})
    }

    addGroupOnBackend(values) {

    }

    editGroupOnBackend(values) {

    }

    removeGroupOnBackend(values) {

    }

    handleGroupEdit = (item) => {
        this.setState({recordForEdit: item})
        this.setOpenPopupEditGroup(true)
    }

    handleGroupRemove = (item) => {
        this.setState({recordForRemove: item.name})
        this.setOpenPopupRemoveGroup(true)
    }

    handleAddGroup = () => {
        console.log("add")
        this.setOpenPopupAddGroup(true)
    }

    render() {
        return(
        <div className="home">
            <Navbar isAdmin="true"/>
                <div className="page-container">
                    <GroupsTable 
                        groups={this.state.groups}
                        handleGroupEdit={this.handleGroupEdit}
                        handleGroupRemove={this.handleGroupRemove}
                        handleAddGroup={this.handleAddGroup}
                    />
                    <Popup 
                        title={'Novo Grupo'}
                        openPopup={this.state.popupAddGroupOpen}
                        setOpenPopup={this.setOpenPopupAddGroup}>
                        <GroupForm 
                            recordForEdit ={null}
                            addOrEdit={this.addGroupOnBackend}
                        />
                    </Popup>
                    <Popup 
                        title={'Editar Grupo'}
                        openPopup={this.state.popupEditGroupOpen}
                        setOpenPopup={this.setOpenPopupEditGroup}>
                        <GroupForm 
                            recordForEdit ={this.state.recordForEdit}
                            addOrEdit={this.editGroupOnBackend}
                        />
                    </Popup>
                    <Popup 
                        title={'Remover Grupo'}
                        openPopup={this.state.popupRemoveGroupOpen}
                        setOpenPopup={this.setOpenPopupRemoveGroup}>
                        <MessagesDisplay 
                            mainMessage={"Tens a certeza que queres apagar o grupo: " + this.state.recordForRemove + " ?"}
                            secundaryMessage={"Caso existam utilizadores atribuídos a este grupo, não será possível remover."}
                            handleOk={this.removeGroupOnBackend}
                        />
                    </Popup>
                </div>
        </div>   
        );
    }

}
