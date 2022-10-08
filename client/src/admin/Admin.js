import React from 'react'
import { Outlet } from 'react-router-dom'


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

