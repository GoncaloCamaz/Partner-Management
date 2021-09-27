import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar'
import PartnershipGrid from '../components/grids/PartnershipsGrid';
import { Context } from '../context/AuthContext';

import './Pages.css'

export default function PartnershipsPage() {

    const admin = true//authenticationContext.isAdmin

    return (
        <div className="home">
            <Navbar isAdmin={admin}/>
                <div className="page-container">
                    <PartnershipGrid />
                </div>
        </div>   
    );
}