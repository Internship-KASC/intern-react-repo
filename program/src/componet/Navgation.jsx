import React from 'react'
import '../componet/navgation.css'
import { RedirectLink } from './Redirection';
import { TfiMenuAlt } from 'react-icons/tfi'
import { BsChevronDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Navgation = () => {
  return (
    <div>
      <div className="container">
        <div className="row" style={{display:'flex',columnGap:'40px'}}>
          <div className="cate">

            <div className="menu" style={{display:'flex',columnGap:'10px'}}>
              <TfiMenuAlt className="MenuAlt" />
              <p className='cat1'>Categories</p>
            </div>
            
            <div className='arrowup'>
              <BsChevronDown className='ChevronDown' />
            </div>

            <div>
              <span></span>
            </div>
          </div>

          <div className="nav" style={{marginTop:"10px"}}>
              <ul className="navItem" style={{columnGap:'10px'}}>
                {RedirectLink.map((item,key)=>{
                  return(
                    <>
                    <li><Link to={"{item.link}"} className="Link">{item.title}</Link></li>
                  </>
                  )
                })}
              </ul>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Navgation