import React, { useEffect, useState } from 'react';
import { Products } from './Products';
import { ProductCard } from '../Components/ProductCard';

export const Men = () => {
  const originalArr = Products({ cat: "men" });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setProducts(originalArr);
    setLoading(false);
  }, [originalArr]);

  function handleFilterChange(selectedFilter) {
    setFilter(selectedFilter);

    if (selectedFilter === 'selectone') {
      setProducts(originalArr); // Show the original data
    } else {
      // Filter the original data based on the selected filter
      let filteredArr = originalArr.filter((el) => el.type === selectedFilter);
      setProducts(filteredArr);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <select onChange={(e) => handleFilterChange(e.target.value)} name="cat" id="op">
        <option value="selectone">selectone</option>
        <option value="jeans">jeans</option>
        <option value="shirt">shirt</option>
      </select>

      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", flexWrap: "wrap" }}>
          {products.map((el) => {
            return <ProductCard key={el.id} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};
