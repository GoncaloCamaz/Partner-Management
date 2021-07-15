import React from 'react';
import Navbar from '../components/navbar/Navbar'

import './Pages.css'
import PaymentsGrid from '../components/grids/PaymentsGrid';

export default function PaymentMainPage() {
    return (
        <div className="home">
            <Navbar/>
                <div className="page-container">
                    <PaymentsGrid />
                </div>
        </div>   
    );
}