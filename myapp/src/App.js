import React from 'react';
import Navbar from './compent/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './compent/Home';
import Services from './compent/Services';
import Product from './compent/Product';
import SignUp from './compent/SignUp';



function App() {
  return (<div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}


export default App;