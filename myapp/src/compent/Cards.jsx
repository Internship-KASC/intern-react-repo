import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import vino from '../compent/Images/img-9.jpg';
import pri from '../compent/Images/img-2.jpg';
import kee from '../compent/Images/img-1.jpg';
import swe from '../compent/Images/img-5.jpg';
import sne from '../compent/Images/img-4.jpg';




function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className="innerbox">
             <CardItem 
              src={vino}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/Services'
              
            />
            </div>
            <div className="innerbox">
            <CardItem
              src={pri}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/Services'
            />
            </div>
          </ul>
          <ul className='cards__items'>
            <div className="innerbox">
            <CardItem
              src={kee}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/Services'
            />
            </div>

            <div className="innerbox">
            <CardItem
              src={swe}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/Product'
            />
            </div>

            <div className="innerbox">
            <CardItem
              src={sne}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/Sign-up'
            />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;