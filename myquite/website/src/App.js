
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
