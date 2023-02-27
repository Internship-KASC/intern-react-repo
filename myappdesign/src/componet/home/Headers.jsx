import React from 'react'
import '../home/header.css'
import { MenuItem } from './MenuItem'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div className='continer navbar'>
      <div className="row">
        <div className="logo">
          <p className="logo-con">
            M<strong>Q</strong>
          </p>
        </div>

        <div className="nav">
          <div className="continer">
            <ul className="nav-list">
              {
                MenuItem.map((item,index)=>{
                  return(
                    <>
                    <li key={index} className='item'>{item.name}</li>
                    </>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className="logsin">
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </div>
    </div>
  )
}


export default Headers