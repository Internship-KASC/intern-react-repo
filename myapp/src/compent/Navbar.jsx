import React,{ useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import {FaTypo3,FaTimes,FaBars} from "react-icons/fa";
import"./Navbar.css";
import {Button} from './Button';
function Navbar () {
    const[click, setClick] =useState(false);
    const[button, setButton]=useState(true);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const showButton=()=>{
        if(window.innerwidth<=960){
            setButton(false);
        }else{
            setButton(true);

        }
        };
    
       useEffect(()=>{
        showButton();
       },[]);

        window.addEventListener('resize',showButton);
   
  return (
   <>
   <nav className="navbar">
    <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            TRVL <FaTypo3/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className>{click ? <FaTimes style={{color:'white'}}/>: <FaBars style={{color:'white'}}/>}</i>
        </div>
        <ul className={click? 'nav-menu active':'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                </Link>
            </li>
            
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
    </div>
   </nav>
   </>
  )
}

export default Navbar