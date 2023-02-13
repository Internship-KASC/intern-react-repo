import React from 'react'
import '../componet/style.css'
import{BsGoogle,BsFacebook} from "react-icons/bs";
import{ImTwitter} from "react-icons/im";
import{SiIndeed} from "react-icons/si";


const Header = () => {
  return (
    <div>
        <header>
            <div className="container">
                <div className="row">
                    <ul className="icone">
                      <BsGoogle />
                      <ImTwitter/>
                      <SiIndeed/>
                      <BsFacebook/>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header