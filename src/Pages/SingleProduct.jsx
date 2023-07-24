import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { cartContext } from "../Context/CartContext";

export const SingleProduct=()=>{
    let api="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
    let {id} = useParams();
    let{ handleCart,handleCartVal}= useContext(cartContext);
    const[product,setProduct]= useState([]);
    const fetchData= async()=>{
        let res= await fetch(`${api}/${id}`);
        let data= await res.json();
        setProduct(data.data);
    }
    useEffect(()=>{
        fetchData();
    },[]);


    return(
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div>
                <img src={product.img} alt={product.id} />
            </div>
            <div>
            <h3>{product.brand}</h3>
            <h4>{product.category}</h4>
            <h4>{product.price}</h4>
            <p>{product.details}</p>
            <button onClick={()=>{
                handleCart(product);
                handleCartVal();
            }}>Add</button>
            </div>
        </div>
    )
}