import React from 'react';
import Navbar from '../components/navbar/Navbar'

import './Pages.css'
import UserProfileGrid from '../components/grids/UserProfileGrid';

export default function ProfilePage() {
    return (
        <div className="home">
            <Navbar/>
                <div className="page-container">
                    <UserProfileGrid />
                </div>
        </div>   
    );
}