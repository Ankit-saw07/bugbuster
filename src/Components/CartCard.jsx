import { useContext } from "react"
import { cartContext } from "../Context/CartContext"
import { useNavigate } from "react-router-dom";

export const CartCard=({id,brand,category,details,price,img})=>{
    let api="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
    let{handleCart,removeCart,handleCartVal}= useContext(cartContext);
    let navigate= useNavigate();
    
    function nav(){
        navigate(`${api}/${id}`)
    }
    
   
    return(
            <div>
                <img src={img} alt={id} />
                <h3>{brand}</h3>
                <h4>{category}</h4>
                <h4>{price}</h4>
                <p>{details}</p>
                <button onClick={()=>{
                    handleCart({id,brand,category,details,price,img});
                    handleCartVal();
                }}>Add</button>
                <button onClick={nav}>Details</button>
                <button onClick={()=>{
                    removeCart(id);
                }}>Remove</button>
            </div>
    )
        
}