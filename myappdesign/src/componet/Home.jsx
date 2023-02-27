import React from 'react'
import './style/style.css'
import Headers from './home/Headers'
import Hero from './home/Hero'
import Services from './home/Services'

const Home = () => {
  return (
    <div>
      <Headers/>
      <Hero/>
      <Services/>
    </div>
  )
}

export default Home