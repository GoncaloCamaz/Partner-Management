import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'

export default class PaymentMethodsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            popupAddOpen: false,
            popupEditOpen: false,
            popupRemoveOpen: false,
            recordForEdit: null,
            recordForRemove: null,
            paymentMethods: [],
            isLoaded: true
        }
    }

    componentDidMount(){

    }

    render() {
        return(
            <div className="home">
            <Navbar isAdmin={true}/>
                <div className="page-container">

                </div>
        </div>   
        );
    }
}