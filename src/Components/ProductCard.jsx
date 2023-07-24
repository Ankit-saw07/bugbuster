import { useContext } from "react";
import {useNavigate} from "react-router-dom"
import { cartContext } from "../Context/CartContext";
import { Badge, Box, Button, Image } from "@chakra-ui/react";

export const ProductCard=({id,brand,category,details,price,img})=>{
    const navigate= useNavigate();
    const nav=()=>{
        navigate(`/product/${id}`);
    }
    let{handleCart,handleCartVal}= useContext(cartContext);
    let obj={
        id: id,
        brand: brand,
        category: category,
        details: details,
        price: price,
        img: img
    }
        
    return(
        <Box maxW={"sm"} borderWidth={"2px"} borderRadius={"20px"} overflow={"hidden"} p={"7"} borderColor={"red.600"}>
            <Image src={img} alt={id} />
            <Box  >
                <Box display={"flex"} justifyContent={"center"} paddingBottom={"10px"}>
                    <Badge borderRadius={"full"} px={"2"} colorScheme="yellow"  >{brand}</Badge>
                </Box >
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'>
                            {category}
                    </Box> 
            </Box>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='short'
                    noOfLines={1}
                    >
                    {details}
                </Box>
           <Box fontWeight={"bold"} paddingBottom={"10px"}>Rs. {price}</Box>
           <Box display={"flex"} justifyContent={"space-evenly"}>
           <Box >
            <button onClick={()=>{
                handleCart(obj);
                handleCartVal();
            }}><Button  borderRadius={"20px"} colorScheme="red" variant={"solid"}> Add </Button></button> </Box>
            <Box ><button onClick={nav}><Button borderRadius={"20px"} colorScheme="red" variant={"outline"}>Details</Button></button>
            </Box>
            </Box>

        </Box>
    )
}
  
