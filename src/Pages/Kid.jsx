import React from 'react';
import { Products } from './Products';
import { ProductCard } from '../Components/ProductCard';

export const Kid = () => {
  const kidsProducts= Products({cat:"kid"});
  return (
  
    <div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", flexWrap: "wrap" }}>
      {kidsProducts.map((el) => {
        return <ProductCard key={el.id} {...el} />;
      })}
    </div>
  </div>
  )
}
