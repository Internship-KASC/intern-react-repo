import './apps.css';
import React from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Cards from './Cards';


function Home() {
  return (
    <>
    <HeroSection/>
    <Cards />
    <Footer/>
    </>
  );
}

export default Home;