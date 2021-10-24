import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import './Pages.css'
import PaymentsGrid from '../components/grids/PaymentsGrid';

export default class PaymentsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paymentMethods: [{
                name: "Transferência Bancária", 
                steps: [
                    {
                        step_id: 0,
                        step_name: "Efetuar Transferência",
                        step_content: "Efetuar transferência bancária para o seguinte NIB: 12318212192381939131931231"
                    },
                    {
                        step_id: 1,
                        step_name: "Enviar comprovativo",
                        step_content: "Enviar comprovativo da transferência para: associados@arcum.pt"
                    },
                    {
                        step_id: 2,
                        step_name: "Finzalização",
                        step_content: "A transferência irá ser registada pelo gestor de associados.O recibo poderá ser emitido assim que a transferência estiver confirmada."
                    },
                ]
              },
              {
                name: "Presencialmente", 
                steps: [
                    {
                        step_id: 0,
                        step_name: "Entrar em contacto com o Gestor de Associados",
                        step_content: "Contactar o gestor de associados através do email associados@arcum.pt"
                    },
                    {
                        step_id: 1,
                        step_name: "Combinar uma data",
                        step_content: "Combinar com o gestor de associados a melhor data para regularizar as quotas."
                    },
                    {
                        step_id: 2,
                        step_name: "Finzalização",
                        step_content: "A transferência irá ser registada pelo gestor de associados. O recibo poderá ser emitido assim que a transferência estiver confirmada."
                    }
                ]
              }],
            associatePayments: [{paymentDate: "27/01/2015", valueReceived: 200, yearsPaid: 10}],
            isLoaded: true
        }
    }

    componentDidMount() {

    }

    render() 
    {        
        return (
            <div className="home">
                <Navbar isAdmin={false}/>
                    <div className="page-container">
                        <PaymentsGrid 
                            paymentMethods={this.state.paymentMethods}
                            associatePayments={this.state.associatePayments}
                        />
                    </div>
            </div>   
        );
    }
}