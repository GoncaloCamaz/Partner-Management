import React from 'react';
import Navbar from '../components/navbar/Navbar'
import PartnershipGrid from '../components/grids/PartnershipsGrid';

import './Pages.css'

export default function PartnershipsPage() {
    return (
        <div className="home">
            <Navbar/>
                <div className="page-container">
                    <PartnershipGrid />
                </div>
        </div>   
    );
}