import React ,{useState} from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [icon, setIcon] = useState(false);
    const handleClick = () => {
        setIcon(!icon)
    }
    const closeSideDrawer = () => {
        icon(false)
    }
  return (
    <div>
    <nav className='navbar'>
        <Link to='/' className='nav-logo' onClick={closeSideDrawer}><h1>My<span>Quote</span></h1></Link>
        <div className='menu-icon' onClick={handleClick}>
            {
                icon ? <FaTimes className='fa-times'></FaTimes> : <FaBars className='fa-bars'></FaBars>
            }
        </div>
        <ul className={
            icon ? 'nav-menu active' : 'nav-menu'
        }>
            <li><Link to='/' className='nav-links' onClick={closeSideDrawer}>Home</Link></li>
            <li><Link to='/About' className='nav-links' onClick={closeSideDrawer}>About Us</Link></li>
            <li><Link to='/Services' className='nav-links' onClick={closeSideDrawer}>Services</Link></li>
            <li><Link to='/Requirement' className='nav-links' onClick={closeSideDrawer}>Requirement</Link></li>
            <li><Link to='/Terms' className='nav-links' onClick={closeSideDrawer}>Terms of Use</Link></li>
            <li><Link to='/Contact' className='nav-links' onClick={closeSideDrawer}>Contact-Us</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar;