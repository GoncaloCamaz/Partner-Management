import React from 'react';
import Navbar from '../components/navbar/Navbar'
import HomeGrid from '../components/grids/HomeGrid'

import './Pages.css'

export default function GroupsPage() {

    return (
        <div className="home">
            <Navbar isAdmin="true"/>
                <div className="page-container">
                    <HomeGrid />
                </div>
        </div>   
    );
}