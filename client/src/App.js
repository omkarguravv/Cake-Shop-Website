import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Client } from './client/Client';
import About from './client/pages/About';
import { Homepage } from './client/pages/Homepage';
import {Signup} from './client/pages/Signup'
import {Signin} from './client/pages/Signin'
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
        </Route>
      </Routes>
    </>
  );
}
export default App;
