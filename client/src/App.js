import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Client } from './client/Client';
import { Admin } from './admin/Admin';
import About from './client/pages/About';
import { Homepage } from './client/pages/Homepage';
import { Signup } from './client/pages/Signup'
import { Signin } from './client/pages/Signin'
import ProductDetail from './client/pages/ProductDetail';
import Cart from './client/pages/Cart';
import AdminHomePage from './admin/pages/AdminHomePage';
import AdminSignin from './admin/pages/AdminSignin';
import AdminSignup from './admin/pages/AdminSignup';
import PrivateRoute from '../src/admin/pages/HOC/PrivateRoute'
function App() {
  return (
    <>

      <Routes>

        {/* Front-end Routes */}
        <Route path='/' element={<Client />}>

          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<Signin />} />
          <Route path='cake' element={<ProductDetail />} />
          <Route path='cart' element={<Cart />} />
        </Route>



        {/* <Route path='/admin' element={<Admin />}> */}
        {/* <Route path='/admin' element={<PrivateRoute  />}> */}
        <Route path='/admin/*' element={<PrivateRoute component={Admin} />}>


        </Route>
          <Route path='/admin/signin' element={<AdminSignin />} />
          <Route path='/admin' element={<AdminHomePage />} />
          <Route path='/admin/signup' element={<AdminSignup />} />


      </Routes>


    </>
  );
}
export default App;
