import React from 'react';
import { HomeCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  const items = HomeCarouselData.map((item, index) => (
    <img
      key={index}
      src={item.image}
      alt=""
      role="presentation"
      onDragStart={(e) => e.preventDefault()}   
      className="cursor-pointer " 

    />
    
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default MainCarousel;
