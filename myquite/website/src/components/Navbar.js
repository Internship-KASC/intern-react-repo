import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css"

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">

                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className>{click ? <FaTimes style={{ color: 'white' }} /> : <FaBars style={{ color: 'white' }} />}</i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                                Sign-up
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar