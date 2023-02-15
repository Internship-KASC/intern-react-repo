import './App.css';
import Navbar from './compent/Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './compent/Home';



function App() {
  return (<div>
    <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path='/' element={<Home/>} />
          </Routes>
    </BrowserRouter>       
   </div>
  );
}


export default App;
