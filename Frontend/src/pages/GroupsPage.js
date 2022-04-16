import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import GroupsTable from '../components/tables/GroupsTable';
import GroupForm from '../components/forms/GroupForm';
import Popup from '../components/popup/Popup';
import MessagesDisplay from '../components/forms/MessagesDisplayForm';
import * as GroupsAPI from '../api/GroupsAPI';

class GroupsPage extends Component {
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
		const groups = this.props.context.state.groups;
        if(groups.length > 0)
        {
            this.setState({groups: groups});
        }
		else {
			this.groupsTableUpdate();
		}        
    }

    groupsTableUpdate = async () => {
		this.setState({isLoaded: false})

        const result = await GroupsAPI.getGroups().then((result) => {
            return result;
        }, (error) => {
            return error;
        })
        if(result.hasErrors)
        {
            this.setState({errorMessage: result.errorMessage, errorPopupOpen: true},
                this.setState({
                    isLoaded: true
                }));
        }
        else
        {
            this.setState({
                groups: result.data,
            }, () => {
                this.setState({ isLoaded: true});
            });
        }
        
        this.setState({isLoaded: true});   
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
        console.log("TODO - LINK TO BACKEND FUNCTION")
    }

    editGroupOnBackend(values) {
        console.log("TODO - LINK TO BACKEND FUNCTION")
    }

    removeGroupOnBackend(values) {
        console.log("TODO - LINK TO BACKEND FUNCTION")
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
            <div>
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
        );
    }

}

const GroupsPageContext = (props) => 
    <AppContext.Consumer>
        {
            context => <GroupsPage {...props} context={context}/>
        }
    </AppContext.Consumer>

export default withRouter(GroupsPageContext)
