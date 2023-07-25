import { createContext, useState } from "react";

export const cartContext= createContext();

export const CartContext=({children})=>{

    const [cartVal,setCartVal]= useState(0);

    const [cart,setCart]= useState([]);

    function handleCartVal(){
        setCartVal(cartVal+1);
    }

    const handleCart=(el)=>{
        setCart([...cart,el])
    }

    const removeCart=(id)=>{
        let arr= cart.filter((element)=>{
            return element.id!==id
        });
        setCart(arr);
    }


    return(<cartContext.Provider value={{cartVal,cart,handleCart,removeCart,handleCartVal}}>{children}</cartContext.Provider>)
}