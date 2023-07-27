import React, { useEffect, useState } from 'react';
import { Products } from './Products';
import { ProductCard } from '../Components/ProductCard';
import { SingleProduct } from './SingleProduct';

export const Women = () => {
  const originalArr = Products({ cat: "women" });
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    setProducts(originalArr);
    // setLoading(false);
  }, [originalArr]);

  function handleFilterChange(selectedFilter, filterType) {
    console.log("Selected filter:", selectedFilter);
  
    if (filterType === 'category') {
      setCategoryFilter(selectedFilter);
    } else if (filterType === 'color') {
      setColorFilter(selectedFilter);
    } else if (filterType === 'price') {
      setPriceFilter(selectedFilter);
    }
  }

  useEffect(() => {
    let filteredArr = originalArr;

    if (categoryFilter) {
      filteredArr = filteredArr.filter((el) => el.catg === categoryFilter);
    }

    if (colorFilter) {
      filteredArr = filteredArr.filter((el) => el.color === colorFilter);
    }

    if (priceFilter === 'lower') {
      filteredArr.sort((a, b) => a.mrp - b.mrp);
    } else if (priceFilter === 'higher') {
      filteredArr.sort((a, b) => b.mrp - a.mrp);
    }

    setProducts([...filteredArr]); // Create a new array to trigger re-render
  }, [categoryFilter, colorFilter, priceFilter]);

  return (
    <div>
      <select onChange={(e) => handleFilterChange(e.target.value, 'category')} name="cat" id="category">
        <option value="">filter by category</option>
        <option value="jeans">jeans</option>
        <option value="shirt">shirt</option>
        <option value="sweater">polo</option>
        <option value="t-shirt">t-shirt</option>
      </select>

      <select onChange={(e) => handleFilterChange(e.target.value, 'color')} name="col" id="color">
        <option value="">filter by color</option>
        <option value="Blue">Blue</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Pink">Pink</option>
        <option value="Violet">Violet</option>
        <option value="Grey">Grey</option>
      </select>

      <select onChange={(e) => handleFilterChange(e.target.value, 'price')} name="price" id="price">
        <option value="">filter by price</option>
        <option value="lower">Lower to higher</option>
        <option value="higher">Higher to lower</option>
      </select>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", flexWrap: "wrap" }}>
        {products.map((el) => {
          return <ProductCard {...el} key={el.id} />
        })}
      </div>
    </div>
  );
};
