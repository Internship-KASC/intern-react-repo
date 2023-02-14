import React from 'react';
import '../components/Navbar-style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href='#'><h1>My<span>Quote</span></h1></a>
      </div>
      <div className="nav-menu">
        <ul>
          <li className="nav-items"><a href="#">Home</a></li>
          <li className="nav-items"><a href="#">About</a></li>
          <li className="nav-items"><a href="#">Requirements</a></li>
          <li className="nav-items"><a href="#">Blog</a></li>
          <li className="nav-items"><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;