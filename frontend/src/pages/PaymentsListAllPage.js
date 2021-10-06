import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import PaymentsTable from '../components/tables/PaymentsTable';

export default class PaymentsListAllPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            popupAddOpen: false,
            popupEditOpen: false,
            popupRemoveOpen: false,
            recordForEdit: null,
            recordForRemove: null,
            payments: [],
            isLoaded: true
        }
    }

    componentDidMount(){

    }

    handleEditPayment = (item) => {
        this.setState({recordForEdit: item})
        this.setOpenPopupEditPayment(true)
    }

    handleRemovePayment = (item) => {
        this.setState({recordForRemove: item})
        this.setOpenPopupRemovePayment(true)
    }

    setOpenPopupEditPayment = (value) => {
        this.setState({popupEditOpen: value})
    }

    setOpenPopupRemovePayment = (value) => {
        this.setState({popupRemoveOpen: value})
    }

    render() {
        return(
            <div className="home">
            <Navbar isAdmin={true}/>
                <div className="page-container">
                    <PaymentsTable 
                        rows={this.state.payments}
                        handleEditPayment={this.handleEditPayment}
                        handleRemovePayment={this.handleRemovePayment}
                    />
                </div>
        </div>   
        );
    }
}