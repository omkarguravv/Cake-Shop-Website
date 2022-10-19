import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './pages/Navbar'


export const Admin = () => {
    return (
        <div>
            {/* Header 
            contetnt as outlet
            footer */}
            <Outlet/>

        </div>
    )
}

