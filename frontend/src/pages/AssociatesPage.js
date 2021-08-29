import React, { Component } from 'react';
import AssociatesGrid from '../components/grids/AssociatesGrid';
import Navbar from '../components/navbar/Navbar'
import './Pages.css'

class AssociatesPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            associates: [
                {
                    associateNumber: 123, 
                    name: "Gonçalo Camaz", 
                    nickname: "Miadas", 
                    fee: "2021", 
                    phoneNumber: "914049105", 
                    email: "gcamaz@sapo.pt",
                    joinedIn: "2017"
                },
                {
                    associateNumber: 124, 
                    name: "Gonçalo Moreira", 
                    nickname: "Camadas", 
                    fee: "2020", 
                    phoneNumber: "914049023", 
                    email: "gcamaz@sapo.pt",
                    joinedIn: "2016"
                },
            ],
            isLoaded: false
        }
    }

    componentDidMount() {
        this.associatesTableUpdate()
    }

    associatesTableUpdate() {
        console.log("update")
    }

    associatesTableFilterChange(options) {

    }

    createNewAssociate(associate) {

    }

    render () {
        const {isLoaded, associates} = this.state

        if(!isLoaded)
        {
            return (
                <div className="home">
                    <Navbar isAdmin="true"/>
                        <div className="page-container">
                            <AssociatesGrid records={associates}/>
                        </div>
                </div>   
            )
        }
    }
}

export default AssociatesPage