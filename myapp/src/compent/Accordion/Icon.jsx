import { useState } from 'react'
import { GiKitchenScale, GiPowerGenerator, GiCampCookingPot, GiBedLamp } from 'react-icons/gi';
import { MdPestControl, MdEventAvailable, MdOutlineHomeWork, MdCastForEducation } from 'react-icons/md';
import { GrFanOption } from 'react-icons/gr';
import { FaUserNurse } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoFitnessSharp } from 'react-icons/io5';
import "./stylei.css";

function Icon() {
  

  return (
    <div className="container">
      <div className="row">
        {
          icons.map((genre) => {
            return (
              <div
                className="genre-btn"
                >
                <span>{genre.id}</span>


                <span className="nav-item-title">{genre.name}</span>
              </div>

            );
          })}
      </div>
    </div>
  )
}


const icons = [
  {
    id: <GiKitchenScale />,
    name: 'Kitchen'
  },
  {
    id: <GiCampCookingPot />,
    name: 'Catering Services'
  },
  {
    id: <MdPestControl />,
    name: 'Pest Control'
  },
  {
    id: <MdCastForEducation />,
    name: 'Education'
  },
  {
    id: <MdEventAvailable />,
    name: 'Event Organsitation'
  },
  {
    id: <MdOutlineHomeWork />,
    name: 'Rental'
  },
  {
    id: <GiPowerGenerator />,
    name: 'Generator Dealers'
  },
  {
    id: <FaUserNurse />,
    name: 'Nursing'
  },
  {
    id: <GrFanOption />,
    name: 'Ac container'
  },
  {
    id: <TbTruckDelivery />,
    name: 'Packers & Movers'
  },
  {
    id: <IoFitnessSharp />,
    name: 'Health wellness'
  },
  {
    id: <GiBedLamp />,
    name: 'Home Applicances'
  },
]
export default Icon