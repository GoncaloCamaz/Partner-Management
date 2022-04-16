import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import AssociatesTable from '../components/tables/AssociatesTable';
import Popup from '../components/popup/Popup'
import CreateAssociateForm from '../components/forms/CreateAssociateForm';
import EditAssociateForm from '../components/forms/EditAssociateForm';
import * as AssociatesAPI from '../api/AssociatesAPI';
import {createPayment} from '../api/PaymentsAPI';
import MessagesDisplay from '../components/forms/MessagesDisplayForm';
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
            groupsForSelect.push({
				id: 'Todos',
				key: 'Todos', 
				title: 'Todos',
				name: 'Todos'
			})
            groups.forEach(group => groupsForSelect.push({
				id: group.initials, 
				key: group.initials, 
				name: group.initials, 
				title: group.initials
			}))
            this.setState({groups: groups, groupsForTableSelect: groupsForSelect})
        }
        this.associatesTableUpdate();        
    }

    associatesTableUpdate = async () => {
        this.setState({isLoaded: false})

        const result = await AssociatesAPI.getAssociates().then((result) => {
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
                associates: result.data,
                filteredAssociates: result.data
            }, () => {
                this.setState({ isLoaded: true});
            });
        }
        
        this.setState({isLoaded: true});
    }

    addAssociate = async (values) => {
		const associate = this.createNewAssociateFromValues(values);
		const result = await AssociatesAPI.createNewAssociate(associate).then((result) => {
            return result;
        }, (error) => {
            return error;
        })

		if(result.hasErrors)
        {
            this.setState({errorMessage: result.message}, () => {
				this.setOpenErrorPopup(true);
			});
        }
		else
		{
			this.setOpenAddAssociatePopup(false);
			this.associatesTableUpdate();
		}
    }

	createNewAssociateFromValues(values) {
		const associate = {
			name: values.name,
			nickname: values.nickname || '',
			groups: [values.initialGroup],
			phoneNumber: values.phoneNumber || '',
			email: values.email,
			city: values.city,
			address: values.address,
			postalCode: values.postalCode,
			joinedIn: new Date(values.joinedIn)
		}

		return associate;
	}

    editAssociate = async (values) => {
		const result = await AssociatesAPI.updateAssociate(values).then((result) => {
            return result;
        }, (error) => {
            return error;
        })

		if(result.hasErrors)
        {
            this.setState({errorMessage: result.message}, () => {
				this.setOpenErrorPopup(true);
			});
        }
		else
		{
			this.setOpenEditAssociatePopup(false);
			this.associatesTableUpdate();
		}
    }

    removeAssociate = async (values) => {
		const result = await AssociatesAPI.deleteAssociate(values).then((result) => {
            return result;
        }, (error) => {
            return error;
        })

		if(result.hasErrors)
        {
            this.setState({errorMessage: result.message}, () => {
				this.setOpenErrorPopup(true);
			});
        }
		else
		{
			this.setOpenRemoveAssociatePopup(false);
			this.associatesTableUpdate();
		}
    }

    resetPassword = async (values) =>
    {
		const result = await AssociatesAPI.resetPassword(values).then((result) => {
            return result;
        }, (error) => {
            return error;
        })

		if(result.hasErrors)
        {
            this.setState({errorMessage: result.message}, () => {
				this.setOpenErrorPopup(true);
			});
        }
		else
		{
			this.setOpenResetPasswordPopup(false);
		}
    }

    submitPayment = async (values) => {
		const result = await createPayment(values).then((result) => {
            return result;
        }, (error) => {
            return error;
        })

		if(result.hasErrors)
        {
            this.setState({errorMessage: result.message}, () => {
				this.setOpenErrorPopup(true);
			});
        }
		else
		{
			this.setOpenPaymentPopup(false);
			this.associatesTableUpdate();
		}
    }


    handleReset = () => {
        const associates = this.state.associates
        this.setState({filteredAssociates: associates})
    }

    handleSearch = (values) => {
        var records = this.state.associates
        if(values !== 'Todos')
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
		this.setState({recordForEdit: {}})
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
							isCreate={true}
                            recordForEdit ={null}
                            groups={this.state.groupsForTableSelect}
                            addOrEdit={this.addAssociate}
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
                            addOrEdit={this.editAssociate}
                        />
                    </Popup>
                    <Popup 
                        title={'Grupos do Associado'}
                        openPopup={this.state.popupSeeAssociateGroupsOpen}
                        setOpenPopup={this.setOpenSeeAssociateGroups}>
                        <AssociateGroupsForm 
                            recordForEdit={this.state.recordForEdit}
                            groups={this.state.groups}
                            addOrEdit={this.editAssociate}
                        />
                    </Popup>
                    <Popup 
                        title={'Remover Associado'}
                        openPopup={this.state.popupRemoveAssociateOpen}
                        setOpenPopup={this.setOpenRemoveAssociatePopup}>
                        <MessagesDisplay 
                            mainMessage={"Tens a certeza que queres apagar o associado com o número: " + this.state.recordForRemove + " ?"}
                            secundaryMessage={"Os registos de pagamentos e informações serão mantidos."}
                            handleOk={this.removeAssociate}
                        />
                    </Popup>
                    <Popup 
                        title={'Reset das Credênciais do Associado'}
                        openPopup={this.state.popupResetPassword}
                        setOpenPopup={this.setOpenResetPasswordPopup}>
                        <MessagesDisplay 
                            mainMessage={"As credênciais do associado: " + this.state.recordForRemove + " vão ser atualizadas."}
                            secundaryMessage={"As novas credênciais vão ser enviadas para o email do associado."}
                            handleOk={this.resetPassword}
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
