import React from 'react'
import "./index.css";
import { IoIosArrowDown } from "react-icons/io";

const Jung = ({data}) => {
  return (
    <div className="custom-accordion">
        <div className="card">
            <div className="card-header">
                <div className="card-body">
                    this is the titiel
                    <span className="accordion-icon">
                      <IoIosArrowDown />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jung