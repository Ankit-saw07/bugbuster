import { useContext, useEffect, useState } from "react"
import { cartContext } from "../Context/CartContext"
import { CartCard } from "../Components/CartCard";
import { Box, Center } from "@chakra-ui/react";

export const Cart=()=>{
    const{cart}= useContext(cartContext);

    const[tot,setTot]= useState(0);

    function handleTot(){
        console.log("inside total function");
        console.log(cart);
        let tp=0;
        for(let i=0;i<cart.length;i++)
        {
            console.log("inside loop", cart[i].mrp);
            tp=tp+cart[i].mrp;
        }
        setTot(tp);
    }
    useEffect(()=>{
        console.log("inside cart useeffect");
        handleTot();
    },[cart]);

    return(
        <Box>
           <Center borderColor={"teal"} border={"5px"} fontSize={"2xl"} fontWeight={"bold"} >Total Amount- Rs.{tot}</Center>
        
            {
                cart.map((el)=>{
                    return <CartCard {...el}/>
                })
            }
            
        </Box>
    )
}