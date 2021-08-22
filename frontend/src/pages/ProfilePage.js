import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar'
import { Context } from '../context/AuthContext';

import './Pages.css'
import UserProfileGrid from '../components/grids/UserProfileGrid';

export default function ProfilePage() {

    const authenticationContext = useContext(Context);
    const admin = true//authenticationContext.isAdmin

    return (
        <div className="home">
            <Navbar isAdmin={admin}/>
                <div className="page-container">
                    <UserProfileGrid />
                </div>
        </div>   
    );
}