import { useContext, useEffect, useState } from "react"
import { cartContext } from "../Context/CartContext"
import { CartCard } from "../Components/CartCard";
import { Center } from "@chakra-ui/react";

export const Cart=()=>{
    const{cart}= useContext(cartContext);

    const[tot,setTot]= useState(0);

    function handleTot(){
        let tp=0;
        for(let i=0;i<cart.length;i++)
        {
            tp=tp+cart[i].price;
        }
        setTot(tp);
    }
    useEffect(()=>{
        handleTot();
    },[cart]);

    return(
        <div>
           <Center borderColor={"teal"} border={"5px"} fontSize={"2xl"} fontWeight={"bold"} >Total Amount- Rs.{tot}</Center>
            <div>
            {
                cart.map((el)=>{
                    return <CartCard {...el}/>
                })
            }
            </div>
        </div>
    )
}