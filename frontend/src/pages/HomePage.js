import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar'
import HomeGrid from '../components/grids/HomeGrid'
import { Context } from '../context/AuthContext';

import './Pages.css'

export default function HomePage() {
    const authenticationContext = useContext(Context);
    const admin = true//authenticationContext.isAdmin

    return (
        <div className="home">
            <Navbar isAdmin={admin}/>
                <div className="page-container">
                    <HomeGrid />
                </div>
        </div>   
    );
}