import React from 'react'
import {SlLocationPin} from "react-icons/sl";
import {MdOutlineAlternateEmail} from "react-icons/md";
import {BsFacebook} from "react-icons/bs";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineGoogle} from "react-icons/ai";
import {FaGripLinesVertical} from "react-icons/fa";
import Myimg from '../images/you1.jpg'
import './styles.css' ;

const Header = () => {
  return (
    <div>
        <header className='header' id='homee'>
            <ul className='hee1'>
                 <li> <SlLocationPin />Ellapalayam</li> 
                 <li> <FaGripLinesVertical/></li>
                 <li> <MdOutlineAlternateEmail/>tharani3920@gmail.com</li>
                <div className='hee2'>                   
                    <li><BsFacebook/></li>
                    <li><AiOutlineInstagram/></li>
                    <li><AiFillTwitterCircle/></li>
                    <li><AiOutlineGoogle/></li>
                </div>

            </ul>
       </header>
       <div className='barmenu'>
            <nav>
                <img className='img1' src={Myimg} alt="test" />
                <ul className="mainmenu">
                    <li className="submenu">HOME</li>
                    <li className="submenu1">SHORTS
                    <ul className="lsub">
                        <li className='li1'>trending</li>
                        <li className='li1'>comedy video</li>
                        <li className='li1'>new invention</li>
                    </ul>
                    </li>

                    <li className="submenu1">CONTENT VIDEO
                    <ul className="lsub">
                        <li className='li2'>agri</li>
                        <li className='li2'>tech</li>
                        <li className='li2'>discovery</li>
                    </ul>
                    </li>
                    <li className="submenu">SETTINGS</li>
                
                        <li>  <a href='#'>
                              <button className='signup'>Join now </button>
                              </a>
                    </li>
               </ul>
            </nav>
         </div>

    </div>
  );
}

export default Header