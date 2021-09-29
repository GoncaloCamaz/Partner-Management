import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import PartnershipGrid from '../components/grids/PartnershipsGrid';

import './Pages.css'
import PartnershipsTable from '../components/tables/PartnershipsTable';

export default class PartnershipsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAdmin: true,
            partnerships: [
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
                },
            ]
        }
    }

    componentDidMount() {

    }

    render() {
        const { isAdmin, partnerships } = this.state

        if(isAdmin)
        {
            return (
                <div className="home">
                    <Navbar isAdmin={isAdmin}/>
                        <div className="page-container">
                            <PartnershipsTable rows={partnerships}/>
                        </div>
                </div>   
            );
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