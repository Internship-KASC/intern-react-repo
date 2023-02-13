import React from 'react'
import '../componet/Navgations.css'

const Navgation = () => {
  return (
    <div>
        <nav>
            <div className="container-1">
                <div className="row-1">
                  <div className="logo">
                    <p><strong>my</strong>Quote</p>
                  </div>
                  <div className='col-1'>
                  <ul className="navslied">
                    <li className="navitem">Home</li>
                    <li className="navitem">Product
                      <ul className="subnav">
                        <li className="sub-nav-item">Andriod</li>
                        <li className="sub-nav-item">IOS</li>
                        <li className="sub-nav-item">Intal</li>
                      </ul>
                    </li>
                    <li className="navitem">Servies</li>
                    <li className="navitem">about</li>
                  </ul>
                  </div>
                </div>
                
            </div>
        </nav>
    </div>
  )
}

export default Navgation