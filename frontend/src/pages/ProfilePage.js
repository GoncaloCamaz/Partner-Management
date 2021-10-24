import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar'
import { Context } from '../context/AuthContext';

import './Pages.css'
import UserProfileGrid from '../components/grids/UserProfileGrid';
import AdminProfileGrid from '../components/grids/AdminProfileGrid';

export default function ProfilePage() {

    const authenticationContext = useContext(Context);
    const admin = authenticationContext.authenticationObject.isAdmin

    if(admin)
    {
        return (
            <div className="home">
                <Navbar isAdmin={admin}/>
                    <div className="page-container">
                        <AdminProfileGrid isAdmin={admin}/>
                    </div>
            </div>   
        );
    }
    else
    {
        return (
            <div className="home">
                <Navbar isAdmin={admin}/>
                    <div className="page-container">
                        <UserProfileGrid isAdmin={admin}/>
                    </div>
            </div>   
        );
    }
}