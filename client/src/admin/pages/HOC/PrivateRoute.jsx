import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Routes>
            <Route {...rest} component={(props) => {
                const token = window.localStorage.getItem('token');
                if (token) {
                    return <Component {...props} />
                } else {
                    return <Route path="/admin" element={ <Navigate to="/admin" /> } />
                    // <Navigate to={'/admin/signin'} />
                }

            }} />
         </Routes>
        )


}

export default PrivateRoute;

// -------------------------------------------

// import { Outlet,Navigate } from "react-router-dom";
// import { Admin } from "../../Admin";

// const PrivateRoute=()=>{
//     const token = window.localStorage.getItem('token');
//     let auth={'token':token}
//     return (
//         auth.token?<Admin/>: <Navigate to={'/admin/sigin'}/>
//     )
// }

// export default PrivateRoute;
