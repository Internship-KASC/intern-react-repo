import React from 'react'
import './styles.css'
import download from '../aadhi/images/download.jpg'
import icon1 from '../aadhi/images/icon1.jpg'
const Dharani = () => {
  return (
    <div>
        <div id="container">
          <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">SERVICE</a></li>
              <li><a href="#">CONTACT US</a></li>
          </ul>
          <img src={download} alt="sk"></img>
        </div>
        <div class="slide-container1">
          <div class="slide-content">
            <div class="card-wrapper">
              <div class="card">
                <div class="image-content">
                  <span class="overlay"></span>
                  <div class="card-image">
                    <img src={icon1} alt="kk"></img>
                  </div>
                </div>
                <div class="card-content">
                  <h2 class="name">Web Development</h2>
                  <p class="description">Our experience combined with design innovation has culminated into the perfect blend of technology and design for our Web Solutions.</p>
               <button class="button">View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
            <div class="col-container">
                <div class="col">
                      <h3>Address</h3>
                      <p>PeerMe Software Technology Private Limited</p>
                      <p>#567, 2nd Floor, Rohit Arcade,</p>
                      <p>Naganathapura, Hosa Road,</p>
                      <p>Electronic City post, Bengaluru,</p>
                      <p>Karnataka, India – 560100</p>
                </div>
                    <div class="col1">
                      <h3>About Us</h3>
                      <p>We are a medium sized software development company with excellent Programmers,</p>
                      <p>Designers, Quality Assurance Engineers, Business Analysts & Technical architects onboard.</p>
                    </div>
                    <div class="col2">
                      <h3>Contact Information</h3>
                      <p>+91 821 760 9562</p>
                      <p>info@peerme.tech</p>
                    </div>
            </div>
        </div>

    </div>
    
    )
};

export default Dharani