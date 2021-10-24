import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar'
import HomeGrid from '../components/grids/HomeGrid'
import { Context } from '../context/AuthContext';

import './Pages.css'

export default function HomePage() {
    const authenticationContext = useContext(Context);
    const admin = authenticationContext.authenticationObject.isAdmin

    if(admin === true)
    {
        return (
            <div className="home">
            <Navbar isAdmin={true}/>
                <div className="page-container">

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
                        <HomeGrid />
                    </div>
            </div>   
        );
    }
}