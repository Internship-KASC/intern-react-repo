import React from 'react'
import '../componet/navgation.css'
import { TfiMenuAlt } from 'react-icons/tfi'
import { BsChevronDown } from 'react-icons/bs'
const Navgation = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="cate">
            <div className="menu">
              <TfiMenuAlt className="MenuAlt" />
            </div>
            <p className='cat1'>Categories</p>
            <div className='arrowup'>
              <BsChevronDown className='ChevronDown' />
            </div>
            <div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navgation