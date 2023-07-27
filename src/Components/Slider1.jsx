import React from "react";
// import Slider from 'infinite-react-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Text,Wrap } from "@chakra-ui/react";

export const Slider1 = () => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box
      bg={"white"}
      w={""}
     mr={10}
      justifyContent={"center"}
      alignItems={"center"}
      pos={'-webkit-sticky'}
      Wrap
    >
      <Box>
        <Slider {...settings}>
          <Box mr={"150%"}>
            <Text style={{ color: "red" }}>
              Get ADDITIONAL 10% ON ORDERS ABOVE ₹18,000. USE CODE :EXTRA10. T&C
              APPLY.
            </Text>
          </Box>
          <Box mr={"100%"}>
            <Text style={{ color: "red" }}>
              TRACK YOUR ORDERS & RETURNS HERE{" "}
            </Text>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};
