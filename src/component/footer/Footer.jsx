import React from 'react'
import '../header/styles.css' 
import {AiOutlineInstagram,AiFillYoutube,AiOutlineTwitter,AiOutlineArrowUp,AiFillLinkedin,AiFillPhone} from "react-icons/ai";
import {GiPalmTree,GiCow,GiGoat} from "react-icons/gi";
import {ImLocation2,ImMail} from "react-icons/im"

const Footer = () => {
  return (
    <div className="footer">
      <div className="contain">
        <div className='subcon-1'>
          <div className="fo-con-1">
          <h4>About Us:</h4>
          <p className='fo-p'> One of the proud farm that runs a successful organic farm in the middle of Erode. After suffering heavy losses with chemical farming.</p>
          </div>
        
        </div>
        <div className="subcon-2">
          <div className="fo-con-1">
          <h4>Contact :</h4>
          <ul className="co">
            <li className="si"><ImLocation2/> 50, Kongu Nagar,Erode.</li>
            <li className="si"><AiFillPhone/>9638527410</li>
            <li className="si"><ImMail/> tharani3920</li>
          </ul>
          </div>
        </div>
        <div className="subcon-3">
           <div className="fo-con-2">
           <h4>Services :</h4>
           <ul className="sicons">
            <li className='ssi'><GiPalmTree/> Growing trees</li>
            <li className='ssi'><GiCow/>Cattle farm</li>
            <li className='ssi'><GiGoat/> Fresh Meat</li>
           </ul>

          </div>
        </div>
        <div className="subcon-4">
          <div className="focon-3">
            <h4>Social Media :</h4>
            <ul className="iconlis">
              <li><AiFillYoutube/> Youtube</li>
              <li><AiOutlineInstagram/>Instagram</li>
              <li><AiOutlineTwitter/>Twitter</li>
              <li><AiFillLinkedin/>Linked in</li>
            </ul>
          </div>
        </div>
         <div className='backbutton'>
         <a href='#'>
        <button class="GFG">
            <AiOutlineArrowUp/>Go Home
        </button>
        </a>
        </div>
      
      </div>
      <div className="lfoot">
        <small>2019-2023@maattu saani</small>
      </div>
    </div>
  );
}

export default Footer