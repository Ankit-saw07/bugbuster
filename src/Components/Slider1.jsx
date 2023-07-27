import React from 'react';
// import Slider from 'infinite-react-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box,Flex } from '@chakra-ui/react'
 
export const Slider1=()=> {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
    
  return (
    <Box bg={'white'} w={'100%'} h={'40px'} justifyContent={'center'} alignItems={'center'} marginLeft={'30px'} marginRight={'30px'} >
    <Slider {...settings}>
      
      <div>
        <h3 style={{color:'red'}} >Get ADDITIONAL 10% ON ORDERS ABOVE ₹18,000. USE CODE  :EXTRA10. T&C APPLY.</h3>
      </div>
      <div>
        <h3 style={{color:'red'}} >TRACK YOUR ORDERS & RETURNS HERE  </h3>
      </div>
    
    
    </Slider>
    
    </Box>
  
  );
};