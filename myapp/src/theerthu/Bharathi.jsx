import React from 'react'
import './jaya.css'
import org from '../theerthu/images/org.jpg'
import soap1 from '../theerthu/images/soap1.jpg'
import soap2 from '../theerthu/images/soap2.jpg'
import soap3 from '../theerthu/images/soap3.jpg'
import soap4 from '../theerthu/images/soap4.jpg'
import sham1 from '../theerthu/images/sham1.jpg'
import sham2 from '../theerthu/images/sham2.jpg'
import sham3 from '../theerthu/images/sham3.jpg'
import sham4 from '../theerthu/images/sham4.jpg'
import oil2 from '../theerthu/images/oil2.jpg'
import oil3 from '../theerthu/images/oil3.jpg'
import oil4 from '../theerthu/images/oil4.jpg'
import oil5 from '../theerthu/images/oil5.jpg'
function Bharathi(){
  return(
     <><div>
      <div id="topbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Soap</a></li>
          <li><a href="#">Shampoo</a></li>
          <li><a href="#">Hair Oil</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
      <div class="header">
        <h1>ORGANIC SHOP</h1>
      </div>
      <div id="container">
        <div id="banner">
          <img src={org} alt="gfg"></img>  
        </div>
      </div>
      <div id="container1">
        <h2><center>SOAP</center></h2>
        <ul className="imgg">
       <li> <div id="image1">
          <img src={soap1} alt="ttt"></img>
        </div></li>
        <li>  <div id="image2">
          <img src={soap2} alt="ttt"></img>
        </div></li>
        <li>  <div id="image3">
          <img src={soap3} alt="ttt"></img>
        </div></li>

        <li>  <div id="image4">
          <img src={soap4} alt="ttt"></img>
        </div></li>
        </ul>
      </div>
    </div>
    <div id="container2">
    <h2><center>SHAMPOO</center></h2>
      <ul className="imgg1">
       <li> <div id="pic1">
          <img src={sham1} alt="dk"></img>
        </div></li>
        <li>  <div id="pic2">
          <img src={sham2} alt="dk"></img>
        </div></li>
        <li>  <div id="pic3">
          <img src={sham3} alt="dk"></img>
        </div></li>

        <li>  <div id="pic4">
          <img src={sham4} alt="dk"></img>
        </div></li>
      </ul>
    </div>
    <div id="container3">
    <h2><center>HAIR OIL</center></h2>
      <ul className="imgg2">
       <li> <div id="ph1">
          <img src={oil2} alt="dk"></img>
        </div></li>
        <li>  <div id="ph2">
          <img src={oil3} alt="dk"></img>
        </div></li>
        <li>  <div id="ph3">
          <img src={oil4} alt="dk"></img>
        </div></li>

        <li>  <div id="ph4">
          <img src={oil5} alt="dk"></img>
        </div></li>
      </ul>
    </div>

    <div className='footer'>
        <div class="col-container">
          <div class="col">
            <h2>Contact us</h2>
            <p>102,Shivaji Nagar,</p>
            <p>Govt. Hospital Opp,</p>
            <p>Coimbatore-638103.</p>
            <p>Tamilnadu.</p>
          </div>

          <div class="col1">
            <h2>Privacy Policy</h2>
            <p>This brand is a member of the L’Oréal USA,family of brands.</p>
            <p>When we say our, We are referring to L’Oréal USA, Inc.</p>
            <p>This Summary Privacy Notice supplements by providing to you.</p>
            <p>This Summary Privacy Notice is for consumers.</p>
          </div>

          <div class="col2">
            <h2>Terms of service</h2>
            <p>This website is operated by Filtered Beauty.</p>   
            <p>Throughout the site, the terms refer to Filtered Beauty.</p>
            <p>Beauty offers including all information,available from this site.</p>
            <p>The user conditioned upon your acceptance of all terms.</p>
          </div>
        </div>
      </div></>


  )
};
export default Bharathi