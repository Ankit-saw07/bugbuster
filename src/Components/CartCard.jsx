import { useContext } from "react"
import { cartContext } from "../Context/CartContext"
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

export const CartCard=({id,
    type,
    icon,
    details,
    disc,
    mrp,
    off,
    catg,
    color})=>{
    let api="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
    let{handleCart,removeCart,handleCartVal}= useContext(cartContext);
    let navigate= useNavigate();
    
    function nav(){
        navigate(`${api}/${id}`)
    }
    
   
    return(
            <Box>
                <img src={icon} alt={id} />
                <h3>{type}</h3>
                <h4>{catg}</h4>
                <h4>{mrp}</h4>
                <h4>{disc}</h4>
                <h4>{off}</h4>
                <h4>{color}</h4>
                <p>{details}</p>
                <Button >Add</Button>
                {/* <Button onClick={nav}>Details</Button> */}
                <Button onClick={()=>{
                    removeCart(id);
                }}>Remove</Button>
            </Box>
    )
        
}