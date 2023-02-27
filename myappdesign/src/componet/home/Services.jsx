import React from 'react'
import './services.css'


const Services = () => {
  return (
    <div className='continer services'>
        <div className="row1">
            <p><strong className='s1'>Services</strong></p>
            <div className="box">

                <div className="boxshow" id="b1">
                        <img src="image/box1.jpeg" alt=""/>
                </div>

                <div className="boxshow1 box1">
                        <p>Load...</p>
                </div>

                <div className="boxshow">
                        <img src="image/box4.jpg" alt=""/>
                </div>

                <div className="boxshow1 box2">
                        <p>Shipping...</p>
                </div>

                <div className="boxshow">
                        <img src="image/box3.jpeg" alt=""/>
                </div>
                <div className="boxshow1 box3">
                        <p>Dealing..</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Services