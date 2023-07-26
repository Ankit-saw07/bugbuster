import { Button, Flex, Text } from "@chakra-ui/react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { Grid, GridItem,Box } from '@chakra-ui/react'
import { SingleProduct } from "../Pages/SingleProduct";
import {Link} from "react-router-dom";

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
  return (
<Grid templateColumns='repeat(4, 1fr)' gap={4}>
<Box w={400} letterSpacing={2}>
 <Flex justifyContent={'space-around'} display={'flex'} alignItems={'center'} flexDirection={'column'}>
     <Box w={500}>
     <Link to={`/product/${id}`}> 
          <img style={{ width: "450px", height: "650px" }} src={icon} alt={id} />
        </Link>
       </Box>
    <Box>
          <Text>
            <b>₹{mrp}</b>  <Text  display={'inline'}  textDecoration={"line-through"}>₹{disc}</Text>{off}
          </Text>
         <Text>{details}</Text>   
         <Button onClick={()=>{{handlecart}}}>Add to Cart</Button>
         </Box>
      </Flex>
    </Box>
    </Grid>
  );
};
