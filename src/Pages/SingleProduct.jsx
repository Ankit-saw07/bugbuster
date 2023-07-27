import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export const SingleProduct = () => {
  // Get the location object from the router
  const location = useLocation();

  // Access the product data from the location state
  const productData = location.state.productData;

  // Render the product details
  return (
   <Box w={'100%'} h={'60%'} justifyContent={'space-between'} alignItems={'baseline'}flexWrap={'nowrap'}>
    <Flex display={'flex'} w={'80%'} h={'60%'} justifyContent={'space-around'} >
      <Box w={900} h={400}>
        <img
          style={{ width: "450px", height: "650px" }}
          src={productData.icon}
          alt={productData.id}
        />
      </Box>
      <Box>
        <Text>
          <b>₹{productData.mrp}</b>{" "}
          <Text display="inline" textDecoration="line-through">
            ₹{productData.disc}
          </Text>
          {productData.off}
        </Text>
        <Text>{productData.details}</Text>
      </Box>
      </Flex>
    </Box>
  );
};
