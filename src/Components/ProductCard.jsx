import { Button, Flex, Text } from "@chakra-ui/react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { Grid, GridItem,Box } from '@chakra-ui/react'
import { SingleProduct } from "../Pages/SingleProduct";
import {Link} from "react-router-dom";
import { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";
import { wishContext } from "../Context/WishContext";
import { CheckIcon, StarIcon } from "@chakra-ui/icons";

export const ProductCard = ({
  id,
  type,
  icon,
  details,
  disc,
  mrp,
  off,
  catg,
  color,
}) => {

  const{handleCart}= useContext(cartContext);
  const{handleWish, removeWish}= useContext(wishContext);
  const[isWishAdded, setIsWishAdded]= useState(false);
  function addToCart(){
    handleCart({id,
      type,
      icon,
      details,
      disc,
      mrp,
      off,
      catg,
      color});
  }

  function addToWish(){
    handleWish({id,
      type,
      icon,
      details,
      disc,
      mrp,
      off,
      catg,
      color});
      setIsWishAdded(true);
  }

  function removeFromWish(){
    removeWish(id);
    setIsWishAdded(false);
  }

  return (
<Grid templateColumns='repeat(4, 1fr)' gap={4}>
<Box w={400} letterSpacing={2}>
 <Flex justifyContent={'space-around'} display={'flex'} alignItems={'center'} flexDirection={'column'}>
     <Box w={500}>
     {/* <Link to={`/product/${id}`}>  */}
          <img style={{ width: "450px", height: "650px" }} src={icon} alt={id} />
        {/* </Link> */}
       </Box>
    <Box>
          <Text>
            <b>₹{mrp}</b>  <Text  display={'inline'}  textDecoration={"line-through"}>₹{disc}</Text>{off}
          </Text>
         <Text>{details}</Text>   
         {isWishAdded?(<Button onClick={removeFromWish} ><CheckIcon/></Button>):(<Button onClick={addToWish}><StarIcon/></Button>)}
         
         <Button onClick={addToCart} >Add to Cart</Button>
         {/* onClick={()=>{{handlecart}} */}
         </Box>
      </Flex>
    </Box>
    </Grid>
  );
};
