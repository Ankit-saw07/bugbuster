import React from 'react';
import { Products } from './Products';
import { ProductCard } from '../Components/ProductCard';

export const Women = () => {
  const womensProducts= Products({cat:"women"});
  console.log(womensProducts);
  return (
  
    <div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", flexWrap: "wrap" }}>
      {womensProducts.map((el) => {
        return <ProductCard key={el.id} {...el} />;
      })}
    </div>
  </div>
  )
}
