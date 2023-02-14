import React from 'react';
import { FaFacebook , FaTwitter , FaWhatsapp , FaYoutube ,FaInstagram} from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import '../components/style-header.css'

function Header() {
  return (
    <header>
      <div className="site-header">
        <div className="sh-row">
          <div className="sh-r-col-1">
          <p>
          <IoLocationSharp className='iconStyle'/>
          Bengaluru, India</p>
          <p><IoMail className='iconStyle'/>
          <a href="mailto:example@example.com">example@example.com</a></p>
          </div>
          <div className="sh-r-col-2">
            <ul className="social-icon">
              <li className="social-icon-items">
                <a className='facebook' href="#"><FaFacebook className='iconStyle'/></a>
                </li>
              <li className="social-icon-items">
                <a href="#" className="whatsapp"><FaWhatsapp className='iconStyle'/></a>
              </li>
              <li className="social-icon-items">
                <a href="#" className="twitter"><FaTwitter className='iconStyle'/></a>
              </li>
              <li className="social-icon-items">
                <a href="#" className="youtube"><FaYoutube className='iconStyle'/></a>
              </li>
              <li className="social-icon-items">
                <a href="#" className="instagram"><FaInstagram className='iconStyle'/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;