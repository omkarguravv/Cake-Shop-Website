import React from 'react'
import { Outlet } from 'react-router-dom'

export const Client = () => {
    return (
        <div>
            {/* Header  */}
            nav bar on each page
            {/* contetnt as outlet */}
            <Outlet/>
            {/* footer */}
            footer on each page

        </div>
    )
}

