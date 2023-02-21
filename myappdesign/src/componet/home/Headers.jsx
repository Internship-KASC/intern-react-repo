import React from 'react'
import '../home/header.css'
import{GoSearch} from 'react-icons/go'
import{IoLocationSharp} from 'react-icons/io5'
import {MenuItem} from './MenuItem'

const Headers = () => {
  return (
    <div className='continer'>
      <div className="row">
        <div className="logo">
          <p className="logo-con">
            My<strong>Quotes</strong>
          </p>
        </div>
        <div className="searchbox">
          <div className="location">
            <button type='button'><IoLocationSharp className='loc'/>Loaction</button>
            <ul className="item_box">
              {
                MenuItem.map((item,index) => {
                  return (
                        <li className="item" key={index}>
                            {item.name}
                        </li>
                  )})
              }
              
            </ul>
          </div>
          <div className="box">
            <input type="text" name="search" id=""  placeholder='Search...'/>
          </div>
          <div className="searchicon">
          <button><GoSearch className='sear'/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headers