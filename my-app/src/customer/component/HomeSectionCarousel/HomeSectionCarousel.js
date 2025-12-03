import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import Button from '@mui/material/Button';   // ✅ use MUI Button
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const HomeSectionCarousel = ({data,SectionName}) => {
  //const carouselRef = useRef(null);

  const [activeIndex,setActiveindex]=useState(0);
  
  const items = data.slice(0,5).map((item, i) => <HomeSectionCard key={i} product={item} />);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5.0 },
  };
const slidPrev=()=>setActiveindex(activeIndex-1);
const slidenext=()=>setActiveindex(activeIndex+1);

const syncActiveIndex=({item})=>setActiveindex(item)

//   const slideNext = () => {
//     carouselRef.current?.slideNext();
//   };

//   const slidePrev = () => {
//     carouselRef.current?.slidePrev();
//   };

  return (
    <div className="relative  border ">
    <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{SectionName}</h2>
    <div className='ralative p-5'>
      <AliceCarousel
      //  ref={carouselRef}
        items={items}
        disableButtonsControls
        responsive={responsive}
        disableDotsControls
        onSlideChange={syncActiveIndex}
        activeIndex={activeIndex}
      />

      {/* Left Button */}
   {activeIndex !==0 && <Button
         onClick={slidPrev}
        variant='cantained'
       className='z-50 bg-white'
        sx={{
          position: 'absolute',
          top: '8rem',
          left: 0,
          transform: 'translateY(100%) ',
          bgcolor: 'white',
          minWidth: '40px',
          //borderRadius: '50%',
          ////boxShadow: 2,
          bgcolor:'white'
        }}
      >
        <KeyboardArrowLeftIcon sx={{color: 'black' }} />
      </Button>
      }
      {activeIndex !== items.length-5 && <Button
        onClick={slidenext}
       variant='cantained'
       className='z-50 bg-white'
        sx={{
          position: 'absolute',
          top: '8rem',
          right: 0,
          transform: 'translateY(100%) ',
          bgcolor: 'white',
          minWidth: '40px',
         // borderRadius: '50%',
         // boxShadow: 2,
         bgcolor:'white'
        }}
       
      >
        <KeyboardArrowRightIcon sx={{ color: 'black' }} />
      </Button>
    }
    </div>
    </div>
  );
};

export default HomeSectionCarousel;
