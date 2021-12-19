import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import PartnershipGrid from '../components/grids/PartnershipsGrid';
import './Pages.css'

export default class PartnershipsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            partnerships: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        //this.partnershipsTableUpdate()
        this.setState({partnerships: 
            [
            {
                name: "Tasquinha Bracarense",
                startDate: "26-12-1998",
                active: "true",
                advantages: ["Oferta da sopa","Sobremesa"],
                addresses: [
                    {
                        address: "Rua dos bares nº 5",
                        city: "braga",
                        postalCode: "4482-123",
                        latitude: "41.5616",
                        longitude: "-8.39653"
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
                        latitude: "41.5616",
                        longitude: "-8.39653"
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
                        latitude: "41.5616",
                        longitude: "-8.39653"
                    }
                ],
                phoneNumber: "123123123", 
                email: "email@arc.pt"
            }
            ]
        })
        this.setState({isLoaded: true})
    }

    render() {
        const { partnerships, isLoaded } = this.state

        if(!isLoaded)
        {
            return (
                <div className="home">
                    <Navbar isAdmin={false}/>
                        <div className="page-container">
                            Loading
                        </div>
                </div>   
            );
        }
        else
        {
            return (
                <div className="home">
                    <Navbar isAdmin={false}/>
                        <div className="page-container">
                            <PartnershipGrid partnerships={partnerships}/>
                        </div>
                </div>   
            );
        }
    }    
}