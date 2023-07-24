import { Text } from "@chakra-ui/react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({
  id,
  type,
  icon,
  details,
  disc,
  mrp,
  catg,
  color,
}) => {
  return (
    <div id="data">
      <div id="img">
        <img style={{ width: "200px" }} src={icon} alt={id} />
        <div id="detail">
          <Text>
            <Text  display={'inline'}  textDecoration={"line-through"}>{disc}</Text> <b>{mrp}</b>
          </Text>
         <Text>{details}</Text>   
          {/* <h3>Color:{color}</h3> */}
        </div>
      </div>
    </div>
  );
};
