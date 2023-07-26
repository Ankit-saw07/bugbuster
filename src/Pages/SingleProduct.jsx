import { Flex, Text,Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Products } from "./Products";

export const SingleProduct = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const { type, icon, details, disc, mrp, off, catg, color } = product;

  return (
    <Flex justifyContent="space-around" alignItems="center" flexDirection="column">
      <Box w={900} h={400}>
        <img style={{ width: "450px", height: "650px" }} src={icon} alt={id} />
      </Box>
      <Box>
        <Text>
          <b>₹{mrp}</b> <Text display="inline" textDecoration="line-through">₹{disc}</Text>
          {off}
        </Text>
        <Text>{details}</Text>
      </Box>
    </Flex>
  );
};
