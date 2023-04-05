import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/img/carousel-image-1.jpg";
import image2 from "../assets/img/carousel-image-2.jpg";
import image3 from "../assets/img/carousel-image-3.jpg";
import image4 from "../assets/img/carousel-image-4.jpg";
import image5 from "../assets/img/carousel-image-5.jpg";
import "./hero-style.css";

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='hero-carousel d-block w-100 h-75'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={1000}>
          <img className='d-block w-100' alt='First slide' src={image1} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className='d-block w-100' alt='First slide' src={image2} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className='d-block w-100' alt='First slide' src={image3} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className='d-block w-100' alt='First slide' src={image4} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className='d-block w-100' alt='First slide' src={image5} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
