import React from 'react'
import '../componet/hero.css'
import img1 from '../hero.jpg'
const Hero = () => {
  return (
    <div>
        <div className="containe-2">
            <div className="row-3">
                <div className="box-1">
                    <img src={img1} alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero