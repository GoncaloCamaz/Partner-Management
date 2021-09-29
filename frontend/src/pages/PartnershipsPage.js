import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import PartnershipGrid from '../components/grids/PartnershipsGrid';
import { Redirect } from 'react-router-dom';

import './Pages.css'
import PartnershipsTable from '../components/tables/PartnershipsTable';

export default class PartnershipsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAdmin: true,
            popupEditOpen: false,
            popupRemoveOpen: false,
            openSeeAddressesPage: false,
            openSeeAdvantagesPage: false,
            recordForEdit: null,
            recordForRemove: null,
            partnerships: []
        }
    }

    componentDidMount() {
        //this.partnershipsTableUpdate()
        this.setState({partnerships: 
            [
            {
                name: "Tasquinha Bracarense",
                startDate: "26/12/1998",
                active: "true",
                advantages: ["Oferta da sopa","Sobremesa"],
                addresses: [
                    {
                        address: "Rua dos bares nº 5",
                        city: "braga",
                        postalCode: "4482-123",
                        latitude: "22828819",
                        longitude: "1982912891"
                    }
                ],
                phoneNumber: "123123123", 
                email: "email@arc.pt"
            },
            {
                name: "Video Norte",
                startDate: "26/12/1998",
                active: "true",
                advantages: ["Desconto de 50 centimos por impressao"],
                addresses: [
                    {
                        address: "Rua dos bares nº 115",
                        city: "braga",
                        postalCode: "44822-123",
                        latitude: "22828819",
                        longitude: "1982912891"
                    }
                ],
                phoneNumber: "123123123", 
                email: "email@arc.pt"
            },
            {
                name: "Oculista",
                startDate: "26/12/1998",
                active: "true",
                advantages: ["Oferta da sopa","Sobremesa"],
                addresses: [
                    {
                        address: "Rua dos bares nº 5",
                        city: "braga",
                        postalCode: "4482-123",
                        latitude: "22828819",
                        longitude: "1982912891"
                    }
                ],
                phoneNumber: "123123123", 
                email: "email@arc.pt"
            }
            ]
        })
    }

    setOpenPopupEditPartnership = (value) => {
        this.setState({popupEditOpen: value})
    }

    setOpenPopupRemovePartnership = (value) => {
        this.setState({popupRemoveOpen: value})
    }

    handleSeeAddresses = (item) => {
        this.setState({recordForEdit: item, openSeeAddressesPage: true})
    }

    handleEditPartnership = (item) => {
        this.setState({recordForEdit: item})
        this.setOpenPopupEditPartnership(true)
    }

    handleRemovePartnership = (item) => {
        this.setState({recordForRemove: item})
        this.setOpenPopupRemovePartnership(true)
    }

    handleSeeAdvantages = (item) => {
        this.setState({recordForEdit: item, openSeeAdvantagesPage: true})
    }

    render() {
        const { isAdmin, partnerships, openSeeAddressesPage, openSeeAdvantagesPage } = this.state

        if(isAdmin)
        {
            if(openSeeAddressesPage)
            {
                return <Redirect to={{
                            pathname: "partnerships/addresses",
                            state: {record: this.state.recordForEdit}
                        }}
                    />
            }
            else if(openSeeAdvantagesPage)
            {
                return <Redirect to={{
                    pathname: "partnerships/advantages",
                    state: {record: this.state.recordForEdit}
                }}
            />
            }
            else
            {
                return (
                    <div className="home">
                        <Navbar isAdmin={isAdmin}/>
                            <div className="page-container">
                                <PartnershipsTable 
                                    rows={partnerships}
                                    handleSeeAddresses={this.handleSeeAddresses}
                                    handleEditPartnership={this.handleEditPartnership}
                                    handleRemovePartnership={this.handleRemovePartnership}
                                    handleSeeAdvantages={this.handleSeeAdvantages}
                                />
                            </div>
                    </div>   
                );
            }
        }
        else
        {
            return (
                <div className="home">
                    <Navbar isAdmin={isAdmin}/>
                        <div className="page-container">
                            <PartnershipGrid partnerships={partnerships}/>
                        </div>
                </div>   
            );
        }
    }    
}