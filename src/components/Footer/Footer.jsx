import React from 'react';
import { BsGearFill, BsBuilding } from "react-icons/bs";
import { RiRoadMapFill } from "react-icons/ri";
import { FcPhoneAndroid } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaFacebook , FaTwitter , FaWhatsapp , FaYoutube ,FaInstagram, FaUserTie} from "react-icons/fa";
import './style-footer.css';

const Footer = () => {
  const today = new Date();

  return (
    <footer className='site-footer'>
      <div className="ft-row-1">
        <div className="ft-r1-col-1">
          <h2 className="about"><a href='#'><FaUserTie className='icons'/>&nbsp;About</a></h2>
          <p>We are a blooming startup company with promising ideas and talent</p>
        </div>
        <div className="ft-r1-col-2">
          <h2 className="services"><a href="#"><BsGearFill className='icons'/>&nbsp;Services</a></h2>
          <ul>
            <li><a href="#">Client</a></li>
            <li><a href="#">Vendor</a></li>
          </ul>
        </div>
        <div className="ft-r1-col-3">
          <h2 className="help">Help</h2>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Advertise</a></li>
          </ul>
        </div>
        <div className="ft-r1-col-4">
          <h2 className="contact"><BsBuilding className='icons'/>&nbsp;Contact</h2>
          <ul>
            <li><a href="#"></a><RiRoadMapFill className='icons'/>MyQuote Inc</li>
            <li><a href="#"></a>&emsp;No.21 Electronic City</li>
            <li><a href="#"></a>&emsp;Bengaluru - 560100</li>
            <li><a href="tel:+91 9787597431"><FcPhoneAndroid className='icons'/>+91 9787597431</a></li>
            <li><a href="mailto:praveenk.ttp@gmail.com"><MdEmail className='icons'/>example@example.com</a></li>
          </ul>
        </div>
      </div>
      <div className="ft-row-2">
        <div className="ft-r2-col-1">
          <ul>
            <li><a href="#">< FaFacebook className='social-icon'/></a></li>
            <li><a href="#">< FaTwitter className='social-icon'/></a></li>
            <li><a href="#">< FaWhatsapp className='social-icon'/></a></li>
            <li><a href="#">< FaYoutube className='social-icon'/></a></li>
            <li><a href="#">< FaInstagram className='social-icon'/></a></li>
          </ul>
        </div>
      </div>
      <div className="ft-row-3">
        <div className="ft-r3-col-1">
          <ul className="legal">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li>&copy; {today.getFullYear()} MyQuote Inc.</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;