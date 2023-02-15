import React from 'react' 
import {GiKitchenScale} from 'react-icons/gi'
import {MdPestControl,MdEventAvailable,MdOutlineHomeWork,MdCastForEducation} from 'react-icons/md'
import {GiPowerGenerator} from 'react-icons/gi'
import {FaUserNurse} from 'react-icons/fa'

const Ram = () => {
  return (
    <div class="container">
            <div class="row">

                <div class="col-lg-12 col-12 text-center mb-4">
                    <h2>Services</h2>
                </div>
                <div class="row" style={{display:'flex'}}>
                    <div class="col-sm-2 text-center">
                        <i className='customicon' ><GiKitchenScale style={{width:"100px",objectFit:'cover',height:"50px"}}/></i>
                        <p class="">Kitchen</p>
                    </div>
                    <div class="col-sm-2 text-center">
                      <i className='customicon' ><MdPestControl style={{width:"100px",objectFit:'cover',height:"50px"}}/></i>
                      <p class="">Pest control</p>
                    </div>
                    <div class="col-sm-2 text-center">
                      <i className='customicon' ><MdEventAvailable style={{width:"100px",objectFit:'cover',height:"50px"}}/></i>
                      <p class="">Event organisation</p>
                    </div>
                    <div class="col-sm-2 text-center">
                      <i className='customicon' ><GiPowerGenerator style={{width:"100px",objectFit:'cover',height:"50px"}}/></i>
                      <p class="">Generator Dealers</p>
                    </div>
                    <div class="col-sm-2 text-center">
                      <i className='customicon' ><MdOutlineHomeWork style={{width:"100px",objectFit:'cover',height:"50px"}}/></i>
                      <p class="">Rental</p>
                    </div>
                    <div class="col-sm-2 text-center">
                      <i className='customicon' ><MdCastForEducation style={{width:"100px",objectFit:'cover',height:"50px"}}/></i>
                      <p class="">Education</p>
                    </div>
                    <div class="col-sm-2 text-center">
                      <i className='customicon' ><FaUserNurse style={{width:"100px",objectFit:'cover',height:"50px"}}/></i>
                      <p class="">Nursing</p>
                    </div>


                    

                </div>
            </div>
    </div>            
                    
  )
}

export default Ram
