import { useContext } from "react"
import { cartContext } from "../Context/CartContext"
import { useNavigate } from "react-router-dom";

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
            <div>
                <img src={icon} alt={id} />
                <h3>{type}</h3>
                <h4>{catg}</h4>
                <h4>{mrp}</h4>
                <h4>{disc}</h4>
                <h4>{off}</h4>
                <h4>{color}</h4>
                <p>{details}</p>
                <button >Add</button>
                {/* <button onClick={nav}>Details</button> */}
                <button onClick={()=>{
                    removeCart(id);
                }}>Remove</button>
            </div>
    )
        
}