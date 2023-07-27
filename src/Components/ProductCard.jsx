import {
  Button,
  Flex,
  Text,
  Grid,
  GridItem,
  Box,
  Image,
} from "@chakra-ui/react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { SingleProduct } from "../Pages/SingleProduct";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";

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
  const { handleCart } = useContext(cartContext);
  const [showSingleProduct, setShowSingleProduct] = useState(false);
  const navigate = useNavigate();
  function addToCart() {
    handleCart({ id, type, icon, details, disc, mrp, off, catg, color });
  }

  const handleDetailsClick = () => {
    // Pass the product data as URL parameters when navigating to SingleProduct page
    const productData = {
      id,
      type,
      icon,
      details,
      disc,
      mrp,
      off,
      catg,
      color,
    };
    // Navigate to SingleProduct page with productData as state
    // return <Link to={`/products/${id}`} state={{ productData }} />;
    navigate(`/products/${id}`, { state: { productData } });
  };
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      <Box w={400} letterSpacing={2}>
        <Flex
          justifyContent={"space-around"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box w={500}>
            <Image
              style={{ width: "450px", height: "650px" }}
              src={icon}
              alt={id}
              // onClick={() => renderSingleProduct()}
            />
          </Box>
          <Box>
            <Text>
              <b>₹{mrp}</b>{" "}
              <Text display={"inline"} textDecoration={"line-through"}>
                ₹{disc}
              </Text>
              {off}
            </Text>
            <Text>{details}</Text>
            <Button
              variant={"solid"}
              color={"red"}
              onClick={() => handleDetailsClick()}
            >
              {" "}
              Details{" "}
            </Button>
            <Button onClick={addToCart}>Add to Cart</Button>
          </Box>
        </Flex>
      </Box>
     
    </Grid>
  );
};
