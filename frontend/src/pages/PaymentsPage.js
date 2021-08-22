import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar'

import './Pages.css'
import PaymentsGrid from '../components/grids/PaymentsGrid';
import { Context } from '../context/AuthContext';


export default function PaymentsPage() {

    const authenticationContext = useContext(Context);
    const admin = true//authenticationContext.isAdmin

    return (
        <div className="home">
            <Navbar isAdmin={admin}/>
                <div className="page-container">
                    <PaymentsGrid />
                </div>
        </div>   
    );
}